FROM node AS builder

COPY . /source/seahub/
WORKDIR /source/seahub/frontend
RUN npm ci
RUN npm run build

FROM ubuntu:24.04

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    python3 \
    python3-dev \
    python3-pip \
    python3-setuptools \
    python3-ldap \
    libcairo2 \
    libcairo2-dev \
    build-essential \
    git \
    pkg-config \
    libmemcached-dev \
    libssl-dev \
    libsasl2-2 \
    libsasl2-dev \
    libldap2 \
    libldap2-dev \
    mariadb-client \
    libmysqlclient-dev \
    postgresql-client \
    libpq-dev \
    sqlite3 \
    libsqlite3-dev \
 && rm -rf /var/lib/apt/lists/*

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

COPY . /source/seahub/
WORKDIR /source/seahub
RUN uv pip install -r pyproject.toml --system --break-system-packages

COPY --from=builder /source/seahub/frontend/build /source/seahub/frontend/build
COPY --from=builder /source/seahub/frontend/webpack-stats.pro.json /source/seahub/frontend/webpack-stats.pro.json

ENV SEAFILE_CONF_DIR=/config
ENV SEAFILE_CENTRAL_CONF_DIR=/config
ENV SEAHUB_LOG_DIR=/tmp
ENV SEAHUB_DIR=/source/seahub
ENV PYTHONPATH=/usr/local/lib/python3.12/dist-packages/:/usr/local/lib/python3.12/site-packages/:/source/:/source/seafobj/:/source/seafevents:/source/seahub/thirdpart

#RUN django-admin compilemessages
RUN python3 manage.py compilejsi18n
RUN python3 manage.py collectstatic --noinput -i admin -i termsandconditions

VOLUME /config
VOLUME /data
VOLUME /tmp

WORKDIR /source/seahub/
ENTRYPOINT ["gunicorn", "seahub.wsgi:application", "--bind", "0.0.0.0:8000"]

FROM ubuntu:24.04 AS builder

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    python3 \
    python3-dev \
    python3-pip \
    python3-setuptools \
    python3-ldap \
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

VOLUME /config
VOLUME /data
VOLUME /tmp

ENV SEAHUB_LOG_DIR=/tmp
ENV SEAHUB_DIR=/source/seahub
ENV PYTHONPATH=/usr/local/lib/python3.12/dist-packages/:/usr/local/lib/python3.12/site-packages/:/source/:/source/seafobj/:/source/seafevents:/source/seahub/thirdpart

WORKDIR /source/seahub/
ENTRYPOINT ["python3", "manage.py", "runserver", "0.0.0.0:8000"]

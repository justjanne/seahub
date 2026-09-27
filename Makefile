PROJECT=seahub

dist: locale statici18n collectstatic

makemessages-js:
	django-admin makemessages -d djangojs -i "thirdpart" -i "node_modules" -i "media" -i "static/scripts/dist" -i "static/scripts/lib" -i "tests" -i "tools" -i "tagging" -i "static/scripts/i18n" -i "frontend/build" -i "frontend/config" -i "frontend/scripts" --verbosity 2 --all

locale:
	@echo "--> Compile locales"
	django-admin compilemessages
	@echo ""

statici18n:
	@echo "--> Generate JS locale files in static/scripts/i18n"
	python manage.py compilejsi18n

collectstatic:
	@echo "--> Collect django static files to media/assets"
	rm -rf media/assets 2> /dev/null
	python manage.py collectstatic --noinput -i admin -i termsandconditions

compressstatic:
	@echo "--> Compress static files(css) to media/CACHE"
	rm -rf media/CACHE 2> /dev/null
	python manage.py compress

clean:
	@echo '--> Cleaning media/static cache & dist'
	rm -rf media/CACHE 2> /dev/null
	rm -rf media/assets 2> /dev/null
	rm -rf static/scripts/dist 2> /dev/null
	@echo ""

.PHONY: develop setup-git dist locale statici18n collectstatic compressstatic clean makemessages-js

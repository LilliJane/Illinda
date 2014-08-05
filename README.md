Illinda
========

La ville intelligente de demain.
Le projet Illinda est un projet de Datavisualisation des données de la ville de Bordeaux et de ses citoyens, créé et développé par quatre étudiants issus de trois écoles différentes. Un graphiste, deux développeurs et une chargée de communication travaillent ensemble sur la problématique de la ville intelligente de demain. Le projet sera présenté lors de la Semaine Digitale à partir du 13 octobre 2014 à Bordeaux. L’idée est de faire un état des lieux des initiatives de la ville en terme de numérique et de ville intelligente, ainsi qu’une ouverture sur son futur  année+10 , en utilisant la datavisualisation comme support. L’équipa utilise alors des données en Open Data, des données privées, ainsi que des données simulées dans l’objectif de prédire certains comportements.

https://www.facebook.com/illindabdx

https://twitter.com/illindabdx

==========================

Smart city of tomorrow.
Illinda is a project of datavisualisation about Bordeaux's open data.

What's datavisualisation ?
This is the visual processing of the information from a database.

Project that will be presented during the Bordeaux's digital week #4.

====
Utilisation de Nginx, Ruby.

Pour installer nginx : 
S'il faut lier l'utilisation de rails à nginx, utiliser la gem passenger. https://www.phusionpassenger.com/documentation/Users%20guide%20Nginx.html#rubygems_generic_install
- installer depuis les sources via nginx.org et wget
- ./configure \
  --prefix=/usr/local \
  --sbin-path=/usr/local/sbin \
  --conf-path=/etc/nginx/nginx.conf \
  --error-log-path=/var/log/nginx/error.log \
  --http-log-path=/var/log/nginx/access.log \
  --with-ipv6
- S'il manque la lib pcre, aller sur http://www.pcre.org/ et utiliser le lien ftp.
- make
- make install
- Ensuite, éditer le fichier /etc/nginx/nginx.conf (voir nginx.conf) puis /etc/nginx/sites-available/default.
- Intégrer le script via https://github.com/Fleshgrinder/nginx-sysvinit-script (tuto ++), attention valable pour debian !!!



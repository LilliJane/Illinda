Illinda
========

La ville intelligente de demain.
Illinda est un projet de datavisualisation sur les données ouvertes de Bordeaux.

Qu'est ce que la datavisualisation ?
C'est le traitement visuel de l'information depuis une base de données.

Projet qui sera présenté lors de la Semaine Digitale de Bordeaux #4.

==========================

Smart city of tomorrow.
Illinda is a project of datavisualisation about Bordeaux's open data.

What's datavisualisation ?
This is the visual processing of the information from a database.

Project that will be presented during the Bordeaux's digital week #4.

====
Utilisation de Nginx, Ruby, serveur FTP (avec mySQL pour la gestion des users).
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



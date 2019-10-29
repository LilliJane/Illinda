# Illinda
> Tomorrow's smart city.

The Illinda project is about the visualisation of the Data of the French city of Bordeaux and its citizens. It is created by 4 students coming from 3 different schools. A graphic designer, two developers and a Communications Officer working together to solve the issue of tomorrow's smart city. The project was presented for the Digital week on the 13th of October 2014 in Bordeaux. The idea was to have a look at what has already been made in terms of digital progress, open data, the smart city and its state 10 years from now. All of which using data visualisation as a support. The team is planning on using Open Data, private data and simulated data in order to predict some behaviours.

### Social Networks

[Facebook](https://www.facebook.com/illindabdx)

[Twitter](https://twitter.com/illindabdx)


## Goals
Smart city of tomorrow.
Illinda is a project of datavisualisation about Bordeaux's open data.

What's datavisualisation ?
This is the visual processing of the information from a database.

Project that will be presented during the Bordeaux's digital week #4.

## How to run it
Relies on Nginx and Ruby.

In order to install nginx : 
If you need to link the install of rails to nginx, use the gem passenger. https://www.phusionpassenger.com/documentation/Users%20guide%20Nginx.html#rubygems_generic_install
1. install sources via nginx.org & wget
2. 
  ```bash
  $ ./configure \
  --prefix=/usr/local \
  --sbin-path=/usr/local/sbin \
  --conf-path=/etc/nginx/nginx.conf \
  --error-log-path=/var/log/nginx/error.log \
  --http-log-path=/var/log/nginx/access.log \
  --with-ipv6
  ```
3. If you miss the lib pcre, use the FTP link on http://www.pcre.org/ 
4. `$ make`
5. `$ make install`
6. Edit **/etc/nginx/nginx.conf** (see nginx.conf) then **/etc/nginx/sites-available/default**.
7. Integrate the script using https://github.com/Fleshgrinder/nginx-sysvinit-script (tuto ++), works on Debian !!!



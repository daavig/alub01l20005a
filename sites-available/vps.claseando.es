server{
    server_name vps.claseando.es;

    location /blog {
        root /home/alub02r20108w/webapps;
    }

    location /bd {
        index index.php;
        root /usr/share;
        location ~ \.php$ {
            include snippets/fastcgi-php.conf;
            fastcgi_pass unix:/run/php/php7.4-fpm.sock;
        }


    }

}

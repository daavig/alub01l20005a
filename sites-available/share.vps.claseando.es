server {
    server_name share.vps.claseando.es;
    root /home/alub02r20108w/webapps/share;
    autoindex on;
    auth_basic "Restricted Access";
    auth_basic_user_file /home/alub02r20108w/webapps/share/private/.htpasswd;

    location /private {
        return 403;
    }
}

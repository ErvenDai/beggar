``
server {
        listen 443 ssl;
        server_name beggar.yefun.top; #填写绑定证书的域名
        ssl_certificate ssl/1_beggar.yefun.top_bundle.crt;
        ssl_certificate_key ssl/2_beggar.yefun.top.key;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #按照这个协议配置
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#按照这个套件配置
        ssl_prefer_server_ciphers on;
        location / {
            proxy_pass https://localhost:9999/;
            index  index.html index.htm;
        }
}
``
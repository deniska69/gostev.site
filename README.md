# Деплой сайта [gostev.site](https://www.gostev.site) на ОС Ubuntu (React JS + Node JS + Nginx)

## Установка сервера

- Арендуйте сервер на ОС Ubuntu (обязательно на SSD).

## Установка необходимых библиотек

- Подключитесь к серверу по SSH с root правами.
- Обновите состояние пакетов:

```
sudo apt update
```

- Установите Curl (Curl - утилита командной строки для передачи данных с или на удаленный сервер. С помощью curl вы можете загружать или выгружать данные, используя один из поддерживаемых протоколов, включая HTTP, HTTPS, SCP , SFTP и FTP):

```
sudo apt install curl
```

- Установите NVM (Node Version Manager):

```
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

- Перейдите в папку профиля пользователя:

```
source ~/.profile
```

## Установка NodeJS:

- Установите конкретную версию (для разработки сайта использовалась версия 16.14.0)

```
nvm install 16.14.0
```

- Проверить активную версию

```
node -v
```

- Явно укажите использовать установленную версию Node:

```
nvm use 16.14.0
```

# Установка Git:

```
apt install git
```

- Склонируйте Git репозиторий:

```
git clone (https ссылка на репозиторий)
```

- Зайдите в папку приложения и установите node_modules:

```
ls -l # Посмотреть список файлов
cd (имя репозитория)
npm install или npm i
```

## Установите PM2 и запустите Node приложение:

- Установите PM2

```
npm install -g pm2
```

- Запустить в режиме продакшн скрипт npm run start и назвать "www"

```
NODE_ENV=production pm2 start npm --name www -- run start
```

- Запускать pm2 при рестарте системы

```
pm2 startup ubuntu
```

- Сохранить процесс чтобы при перезапуске Ubuntu запускался сам

```
pm2 save
```

- Доп.команды PM2:

```
# Статус процессов
pm2 status

# Остановить pm2 скрипт
pm2 stop www

# Удалить pm2 срипт
pm2 delete www

# Показать логи приложения (Ctrl + C чтобы выйти)
pm2 logs

# Удалить pm2 из автозапуска при рестарте системы (если требуется)
pm2 unstartup ubuntu

```

## Установка firewall (22 и 80 порты)

```
ufw status
ufw enable
ufw allow ssh
ufw allow http
ufw allow https
```

## Установка Nginx + SSL

- Подготовьте два сертификата SSL

```
1) gostev.site.crt
2) gostev.site.key
```

- Поместите их в следующую папку

```
/etc/ssl
```

- Установите Nginx

```
sudo apt install nginx
```

- Откройте файл конфига

```
sudo nano /etc/nginx/sites-available/default
```

- Содержимое конфига замените на следующее

```
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	listen 443 ssl default_server;
	listen [::]:443 ssl default_server;
	ssl_certificate /etc/ssl/gostev.site.crt;
	ssl_certificate_key /etc/ssl/gostev.site.key;

	root /root/gostev.site;
	index index.html index.htm index.nginx-debian.html;
	server_name 185.105.89.9 gostev.site www.gostev.site;

	location / {
		proxy_pass http://localhost:3000;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
	}
}
```

- Нажмите Ctrl+X, затем 'y', затем 'Enter' для сохранения и выхода из редактора конфига Nginx

- Проверьте синтаксис Nginx

```
sudo nginx -t
```

- Перезапустить Nginx

```
sudo service nginx restart
```

- Доп.команды Nginx:

```
# Проверить статус Nginx
systemctl status nginx

# Остановить Nginx
systemctl stop nginx

```

## Готово!

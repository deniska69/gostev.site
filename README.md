# Деплой сайта [gostev.site](https://www.gostev.site) на ОС Ubuntu (React JS, Next JS, Node JS, Nginx)

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

- Установите Node:

```
# Установить последную версию
nvm install node
# Установить конкретную версию (для разработки сайта использоваталась версия 16.14.0)
nvm install 16.14.0
# Проверить активную версию
node -v
```

- Явно укажите использовать установленную версию Node:

```
nvm use 16.14.0
```

- Установите Git:

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

```
# Установите PM2
npm install -g pm2

# Запустить в режиме продакшн npm run start скрипт и назвать "gostev.site"
NODE_ENV=production pm2 start npm --name gostev.site -- run start

# Запускать pm2 при рестарте системы
pm2 startup ubuntu

# Удалить pm2 из автозапуска при рестарте системы (если требуется)
pm2 unstartup ubuntu

# Сохранить процесс чтобы при перезапуске Ubuntu запускался сам
pm2 save
```

- Доп.команды PM2

```
# Статус процессов
pm2 status

# Остановить pm2 скрипт
pm2 stop gostev.site

# Удалить pm2 срипт
pm2 delete gostev.site

# Показать логи приложения (Ctrl + C чтобы выйти)
pm2 logs

```

## Установка firewall (22 и 80 порты)

```
ufw status
ufw enable
ufw allow ssh
ufw allow http
ufw allow https
```

## Установка Nginx

```
# Установите Nginx
sudo apt install nginx

# Откройте файл конфига
sudo nano /etc/nginx/sites-available/default

# Строчку 'server_name _;' замените на:
- server_name gostev.site www.gostev.site;

# Отредактируейте блок location{} на следующее:

location / {
proxy_pass http://localhost:3000; # Порт на котором запускается node.js приложение
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}

# Нажмите Ctrl+X, затем 'y', затем 'Enter' для сохранения и выхода из редактора конфига Nginx

```

- Доп.команды Nginx

```

# Проверьте синтаксис Nginx
sudo nginx -t

# Проверить статус Nginx
systemctl status nginx

# Остановить Nginx
systemctl stop nginx

# Перезапустить Nginx
sudo service nginx restart

```

## Готово!

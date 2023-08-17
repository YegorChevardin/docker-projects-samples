# Time Application

Time application consists of the frontend and backend parts
Frontend is written with help of the Vue.js framework
Backend is written using Node.js and Express
Database is MySQL

To run with custom environment variables - create `.env` in the root directory of `docker-compose.yml` file

Example of `.env` file:
```txt
MYSQL_DB: your db name
MYSQL_USER: your db username
MYSQL_PASS: your db password
```

Or you can copy an example from .env-example file.
To run app with .env-example variables - run command: `docker-compose --env-file .env-example up -d --build`

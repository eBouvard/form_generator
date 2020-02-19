# Blueteam Backend Server

> Backend with Node.js, Express and Postgres

## Setup

Pre-requisites:

- Docker for Desktop
- A .env file in the 'back' folder with the connection string to Postgre

Run `docker-compose up` in the root of the project.

It will bring up Postgres and the Node.js application server in development mode.

It binds the application server to `localhost:3000`, this can be re-mapped this by changing the first 3000 in `3000:3000` of [./docker-compose.yaml](./docker-compose.yaml)).

Postgres is exposed on port `5432`. The connection string is `postgres://user:pass@localhost:5432/db` (username, password and database name are defined in [./docker-compose.yaml](./docker-compose.yaml)).

The default Docker `CMD` is `npm start`, [./docker-compose.yaml](./docker-compose.yaml) overrides this to `npm run dev` which runs the application using nodemon (auto-restart on file change).


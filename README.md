# Blueteam Backend Server

> Frontend with Vue (Vuetify)
> Backend with Node.js, Express connected to Postgres

## Setup

Pre-requisites:

- Docker for Desktop
- A .env file in the 'back' folder with the connection info to Postgres db

Run `docker-compose up` in the root of the project.

It will bring up the Node.js application server in development mode.

## Local Setup for Devlopment

- Backend: npm install && nodemon api.js
- Frontend: yarn install && yarn serve
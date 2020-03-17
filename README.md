# Blueteam Repo

> Frontend with Vue with Vuetify Material Kit
> Backend with Node.js, Express connected to Postgres

## Setup

Pre-requisites:

- Docker for Desktop and a Postgres DB
- A .env file in the 'back' folder with the connection info to Postgres db

Into the Parser folder, run `docker build -t parser` to build the image for the parser first
Then, run `docker-compose up` in the root of the project.

It will bring up the Node.js application server in development mode.

## Local Setup for Devlopement

In each folder:
- Backend: npm install && nodemon api.js
- Frontend: yarn install && yarn serve
- Parser (python): pip install -r requirements.txt && python api.py
- Parser (conda): conda env create && python api.py
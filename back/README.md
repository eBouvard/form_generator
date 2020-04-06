# API for project Arena

Please use the Postman Collection in this folder to get the full documentation of the API
[Guide to import a collection in Postman](https://learning.postman.com/docs/postman/collection-runs/working-with-data-files/)

Prerequisites:
- Node.js v12.16 and NPM
- a Postgre DB
- A .env file in this folder folder with the following information:
```
# .env
PGHOST=
PGPORT=
PGDATABASE=
PGUSER=
PGPASSWORD=
```

## Project setup
```
npm start
```

### Hot-reloads for development (using nodemon)
```
npm dev
```
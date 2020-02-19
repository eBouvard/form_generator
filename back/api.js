const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

//Load the .env file for credentials
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

//Sanity Check
app.get('/health', function (req, res) {
  res.send('OK\n')
})

//DB connection
const db = require('../db')
app.get('/db', function (req, res) {
  let ret = "No connection to db"
  client
    .query('SELECT $1::text as message', ['Hello world from Postgre!'])
    .then(res => {
      console.log(res.rows[0].message)
    })
    .catch(e => console.error(e.stack))
  res.send('OK')
})

app.listen(3000, function () {
  console.log('API listening on port 3000!')
})

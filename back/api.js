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

//Database connection
const db = require('./db')

//db sanity check
app.get('/db', (req, res, next) => {
  db.query('SELECT $1::text as message', ['Hello world from Postgre!'], (err, res) => {
    if (err) {return next(err)}
      console.log(res.rows[0])
    })
})

app.listen(3000, function () {
  console.log('API listening on port 3000!')
})

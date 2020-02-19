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
const { Client } = require('pg')
const client = new Client({})
client.connect()

app.get('/db', function (req, res) {
  client.query('SELECT $1::text as message', ['Hello world from Postgre!'], (err, res) => {
    console.log(err ? err.stack : res.rows[0].message) // Hello World to Postgre
  })
  res.send('Please check your console');
})

app.listen(3000, function () {
  console.log('API listening on port 3000!')
})

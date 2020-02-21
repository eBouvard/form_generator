const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mountRoutes = require('./routes')

//Load the .env file for credentials
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

//Express setup and sanity route
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
mountRoutes(app)
app.get('/check', function (req, res) {
  res.send('API listening on port 3000!')
})

app.listen(3000, function () {
  console.log('API listening on port 3000!')
})

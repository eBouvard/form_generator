const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mountRoutes = require('./routes')

//Load the .env file for credentials and configure the port
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
if (process.env.PORT === undefined) {
  process.env.PORT = 3000;
}

//Express setup and sanity route
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
mountRoutes(app)
app.get('/check', function (req, res) {
  res.send('API listening on port ' + process.env.PORT)
})

app.listen(process.env.PORT, function () {
  console.log('API listening on port ' + process.env.PORT)
})

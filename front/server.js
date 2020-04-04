const axios = require('axios')

const env = process.env.NODE_ENV || 'dev';

const api_path = "http://" + ((env == "production") ? 'api' : 'localhost') + ":3000/";

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname + '/dist/'));

app.use(staticFileMiddleware);
app.use(bodyParser.json())
app.use(history());
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/' + '/index.html'));
});

app.post('/api/:method/*', function (req, res) {
  if (req.params.method == 'get') {

  }
  else if (req.params.method == 'post') {
    axios.post(api_path + req.params[0], req.body)
      .then(ret => {
        res.send(ret.data.toString());
      })
      .catch(e => {
        console.log(e);
      })
  }
});

app.listen(5000, function () {
})

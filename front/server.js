const axios = require('axios')
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const history = require('connect-history-api-fallback');

const api_path = "http://" + ((process.env.NODE_ENV == "production") ? 'api' : 'localhost') + ":3000/";

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname + "/dist/"));

app.use(staticFileMiddleware);
app.use(bodyParser.json())
app.use(history());
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + "/dist/" + '/index.html'));
});

app.post('/api/:method/*', function (req, res) {
  console.log("GET " + req.params[0] + "\n\n");
  if (req.params.method == 'get') {
    axios.get(api_path + req.params[0])
      .then(ret => {
        console.log(JSON.stringify(ret.data));
        res.send(JSON.stringify(ret.data));
      })
      .catch(e => {
        console.log(e);
      })
  }
  else if (req.params.method == 'post') {
    axios.post(api_path + req.params[0], req.body)
      .then(ret => {
        res.send(JSON.stringify(ret.data));
      })
      .catch(e => {
        console.log(e);
      })
  }
});

app.listen(5000, function () {
})

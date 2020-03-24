import axios from 'axios';

let apiServer =  'localhost'
if (process.env.NODE_ENV == 'production') {
  apiServer =  'api'
}

export default () => axios.create({
  baseURL: 'http://' + apiServer + ':3000',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
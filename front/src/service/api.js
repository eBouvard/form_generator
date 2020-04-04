import axios from 'axios';

let apiURL = 'http://' + window.location.host;

export default () => axios.create({
  baseURL: apiURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

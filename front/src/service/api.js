import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://' + window.location.host.split(":")[0] + ':3000',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
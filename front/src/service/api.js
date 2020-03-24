import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://api:3000',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
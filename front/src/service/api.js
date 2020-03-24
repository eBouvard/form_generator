import axios from 'axios';

const apiServer = process.env.DOCKER == 'true' ? 'api' : 'localhost'

export default () => axios.create({
  baseURL: 'http://' + apiServer + ':3000',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
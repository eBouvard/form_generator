import axios from 'axios';

//Connection to Python API to parse the file
let apiURL = 'http://localhost:3000'

if (process.env.NODE_ENV == 'production') {
    apiURL = 'http://api:3000'
}
export default () => axios.create({
  baseURL: apiURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
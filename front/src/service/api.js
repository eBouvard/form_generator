import axios from 'axios';

//Connection to Python API to parse the file
let apiURL = 'http://' + window.location.host.split(":")[0] + ':3000'

}
export default () => axios.create({
  baseURL: apiURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

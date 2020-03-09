const Router = require('express-promise-router')
const axios = require('axios')

const router = new Router()
module.exports = router

const flask = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { 'Access-Control-Allow-Origin': '*',},
    });

//Parse a file
router.get('/', async (req, res) => {
    ret flask.get('/').then(ret => {
        const { data } = ret
        return(data)
    }).catch(e => {
        console.log(e)
    })
    res.send("hi")
  })
  
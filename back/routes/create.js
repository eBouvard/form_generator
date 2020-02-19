const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()
module.exports = router

const test = {type:"Fiat", model:"500", color:"white"}

router.post('/json', async (req, res) => {
    console.log(req.body)
    //const { rows } = await db.query('INSERT INTO obj(data) VALUES($1) RETURNING *', [test])
    res.send('rows')
})

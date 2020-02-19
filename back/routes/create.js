const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

router.post('/json', async (req, res) => {
    const { rows } = await db.query('SELECT data FROM obj')
    res.send(rows)
})


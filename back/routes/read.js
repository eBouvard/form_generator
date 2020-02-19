const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

router.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT $1::text as message', ['Hello world from Postgre!'])
  res.send(rows[0].message)
})

router.get('/all', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM obj')
    res.send(rows)
})

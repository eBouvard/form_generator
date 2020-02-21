const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()
module.exports = router

//Define the JSON table
const JSON_table = 'json'

//Read all JSON data
router.get('/all', async (req, res) => {
    const { rows } = await db.query(`SELECT * FROM ${JSON_table}`)
    res.send(rows)
})

//Read a specific JSON data
router.get('/:id', async (req, res) => {
  const query = {
    text: `SELECT data FROM ${JSON_table} WHERE id=$1`,
    values: [req.params.id],
  }
  const { rows } = await db.query(query)
  res.send(rows)
})

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
  id = req.params.id
  if (!isNaN(id)) {
    const query = {
      text: `SELECT data FROM ${JSON_table} WHERE id=$1`,
      values: [id],
    }
    const { rows } = await db.query(query)
    res.send(rows[0] === undefined ? 'Wrong ID' : rows[0].data)
  } else {
    res.send('Wrong ID')
  }
})

//Read a specific field within a JSON
router.get('/val/:field/:id', async (req, res) => {
  const id = req.params.id
  const field = req.params.field
  if (!isNaN(id)) {
    const query = {
      text: `SELECT data->>$2 FROM ${JSON_table} WHERE id=$1`,
      values: [id, field],
    }
    const { rows } = await db.query(query)
    res.send(rows[0] === undefined ? 'Wrong ID' : rows[0]['?column?'])
  } else {
    res.send('Wrong ID')
  }
})
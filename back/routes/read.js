const Router = require('express-promise-router')
const db = require('../service/db')

const router = new Router()
module.exports = router

//Define the JSONTable and Template table
const JSON_table = 'json'
const TEMPLATE_table = 'template'

//Check DB connection
router.get('/health', async (req, res) => {
  const { rows } = await db.query('SELECT $1::text as message', ['Hello world from Postgre!'])
  res.send(rows[0].message + '\n')
})

//Read all JSON data
router.get('/all', async (req, res) => {
  const { rows } = await db.query(`SELECT * FROM ${JSON_table} ORDER BY id DESC`)
  res.send(rows)
})

//Get last 10 orders
router.get('/last', async (req, res) => {
  const { rows } = await db.query(`SELECT * FROM ${JSON_table} ORDER BY id DESC LIMIT 10`)
  res.send(rows)
})

//Read all JSON data without content (not finished)
router.get('/list', async (req, res) => {
  const { rows } = await db.query(`SELECT * FROM ${JSON_table} ORDER BY id`)
  res.send(rows)
})

//Read all JSON data from a specific Table
router.get('/all/:table', async (req, res) => {
  const table = req.params.table
  if (table != undefined) {
    const { rows } = await db.query(`SELECT * FROM ${table} ORDER BY id`)
    res.send(rows) 
  } else { res.send('Wrong table name')}
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

//Read a specific JSON data (specific Table)
router.get('/:id/:table', async (req, res) => {
  const id = req.params.id
  const table = req.params.table
  if (!isNaN(id) && table != undefined) {
    const query = {
      text: `SELECT data FROM ${table} WHERE id=$1`,
      values: [id],
    }
    const { rows } = await db.query(query)
    res.send(rows[0] === undefined ? 'Wrong ID' : rows[0].data)
  } else {
    res.send('Wrong ID')
  }
})


//Read a specific field within a JSON
router.get('/:id/:field', async (req, res) => {
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
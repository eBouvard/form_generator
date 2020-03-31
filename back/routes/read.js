const Router = require('express-promise-router')
const db = require('../service/db')

const router = new Router()
module.exports = router

//Define the JSONTable and Template table
const TEMPLATE_table = 'template'

//Check DB connection
router.get('/health', async (req, res) => {
  const { rows } = await db.query('SELECT $1::text as message', ['Hello world from Postgre!'])
  res.send(rows[0].message + '\n')
})

//Get last 10 orders
router.get('/last/:table', async (req, res) => {
  const table = req.params.table
  const { rows } = await db.query(`SELECT * FROM ${table} ORDER BY id DESC LIMIT 10`)
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

//Gat stat for a table
router.get('/stat/:table', async (req, res) => {
  const table = req.params.table
  if (table != undefined) {
    const { rows } = await db.query(`SELECT count(*) FROM ${table}`)
    res.send(rows[0]) 
  } else { res.send('Wrong table name')}
})

//Read a specific JSON data (specific Table)
router.get('/:table/:id', async (req, res) => {
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
router.get('/:table/:id/:field', async (req, res) => {
  const id = req.params.id
  const field = req.params.field
  const table = req.params.table
  if (!isNaN(id)) {
    const query = {
      text: `SELECT data->>$2 FROM ${table} WHERE id=$1`,
      values: [id, field],
    }
    const { rows } = await db.query(query)
    res.send(rows[0] === undefined ? 'Wrong ID' : rows[0]['?column?'])
  } else {
    res.send('Wrong ID')
  }
})


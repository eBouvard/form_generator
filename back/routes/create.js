const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()
module.exports = router

//Check DB connection
router.get('/health', async (req, res) => {
    const { rows } = await db.query('SELECT $1::text as message', ['Hello world from Postgre!'])
    res.send(rows[0].message)
  })

//Define the JSONTable
const JSON_table = 'json'

//Create a simple JSONTable
router.get('/JSONtable/:name', async (req, res) => {
    const table_name = req.params.name
    const query = {
        text: `CREATE TABLE ${table_name} (id SERIAL PRIMARY KEY, data JSONB)`,
    }
    const { ret } = await db.query(query)
    res.send(ret === undefined ? 'OK' : ret)
})

const test = {type:"Fiat", model:"500", color:"white"}

//Add a new data into the JSONTable
router.post('/json', async (req, res) => {
    const query = {
        text: `INSERT INTO ${JSON_table}(data) VALUES ($1)`,
        values: [test]
    }
    const { ret } = await db.query(query)
    res.send(ret === undefined ? 'OK' : ret)
})

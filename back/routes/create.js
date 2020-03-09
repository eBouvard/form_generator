const Router = require('express-promise-router')
const db = require('../service/db')

const router = new Router()
module.exports = router

//Check DB connection
router.get('/health', async (req, res) => {
    const { rows } = await db.query('SELECT $1::text as message', ['Hello world from Postgre!'])
    res.send(rows[0].message + '\n')
  })

//Define the JSONTable
const JSON_table = 'json'

//Create a simple JSONTable
router.get('/JSONtable/:name', async (req, res) => {
    const new_table = req.params.name
    const query = {
        text: `CREATE TABLE ${new_table} (id SERIAL PRIMARY KEY, data JSONB)`,
    }
    const ret  = await db.query(query)
    res.send(ret != undefined ? 'OK' : ret)
})

//Add a new data into the main JSONTable
router.post('/json', async (req, res) => {
    const json_data = req.body

    if (json_data != undefined) {
        const query = {
            text: `INSERT INTO ${JSON_table}(data) VALUES ($1) RETURNING id`,
            values: [json_data]
        }
        const { rows } = await db.query(query)
        const ret = rows[0].id
        res.send(ret === undefined ? 'Error' : ret.toString())
    } else {
        res.send('Wrong request: no JSON data')
    }
})

//Add a new data into the a specific JSONTable
router.post('/json/:table', async (req, res) => {
    const json_data = req.body
    const table = req.params.table
    console.log(table)

    if (json_data != undefined && table != undefined) {
        const query = {
            text: `INSERT INTO ${table}(data) VALUES ($1) RETURNING id`,
            values: [json_data]
        }
        const { rows } = await db.query(query)
        const ret = rows[0].id
        res.send(ret === undefined ? 'Error' : ret.toString())
    } else {
        res.send('Wrong request: no JSON data or Table name')
    }
})

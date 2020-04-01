const Router = require('express-promise-router')
const db = require('../service/db')

const router = new Router()
module.exports = router

//Define the JSONTable and Template table
const TEMPLATE_table = 'template'

//Create a simple JSONTable
router.get('/JSONtable/:name', async (req, res) => {
    const new_table = req.params.name
    const query = {
        text: `CREATE TABLE ${new_table} (id SERIAL PRIMARY KEY, data JSONB)`,
    }
    const ret  = await db.query(query)
    res.send(ret != undefined ? 'OK' : ret)
})

//Create a default TemplateTable
router.get('/TEMPLATEtable', async (req, res) => {
    const new_table = TEMPLATE_table
    const query = {
        text: `CREATE TABLE ${new_table} (id SERIAL PRIMARY KEY, name VARCHAR NOT NULL,  data JSONB)`,
    }
    const ret  = await db.query(query)
    res.send(ret != undefined ? 'OK' : ret)
})

//Add a new Template
router.post('/template/:name', async (req, res) => {
    const json_data = req.fields
    const name = req.params.name
    if (name != undefined && json_data != undefined) {
        const query = {
            text: `INSERT INTO ${TEMPLATE_table}(name, data) VALUES ($1, $2) RETURNING id`,
            values: [name, json_data]
        }
        const { rows } = await db.query(query)
        const ret1 = rows[0].id
        const queryJSONTable = {
            text: `CREATE TABLE ${name} (id SERIAL PRIMARY KEY, data JSONB)`,
        }
        const ret2  = await db.query(queryJSONTable)
        res.send(ret1 != undefined && ret2 != undefined? 'OK' : ret)
    } else {
        res.send('Wrong request: no JSON data or template name')
    }
})

//Add a new data into the a specific JSONTable
router.post('/:table', async (req, res) => {
    const json_data = req.fields
    const table = req.params.table
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

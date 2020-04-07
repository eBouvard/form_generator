const Router = require('express-promise-router')
const db = require('../service/db')
const fs = require('fs')
const path = require('path')

const router = new Router()
module.exports = router

//Define the template table and local function to add a template
const TEMPLATE_table = 'template'

function createTemplate(name, template) {
    if (name != undefined && template != undefined) {
        const query = {
            text: `INSERT INTO ${TEMPLATE_table}(name, data) VALUES ($1, $2) RETURNING id`,
            values: [name, template]
        }
        const ret1 =  db.query(query)
        const queryJSONTable = {
            text: `CREATE TABLE ${name} (id SERIAL PRIMARY KEY, data JSONB)`,
        }
        const ret2 = db.query(queryJSONTable)
        return (ret1 != undefined && ret2 != undefined ? 'OK' : ret1)
    }
}

//Create the database Application and add Context example
router.get('/appDB', async (req, res) => {
    await db.query(`CREATE TABLE ${TEMPLATE_table} (id SERIAL PRIMARY KEY, name VARCHAR NOT NULL,  data JSONB)`)
    const opord = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../assets/opord.json')))
    const opordTable = createTemplate('opord', opord)
    const covid = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../assets/covid.json')))
    const covidTable = createTemplate('covid', covid)
    res.send('Done:\n' + '\nOpord: ' + opordTable + '\nCovid: ' + covidTable)
})

//Create a simple JSONTable
router.get('/JSONtable/:name', async (req, res) => {
    const new_table = req.params.name
    const query = {
        text: `CREATE TABLE ${new_table} (id SERIAL PRIMARY KEY, data JSONB)`,
    }
    const ret = await db.query(query)
    res.send(ret != undefined ? 'OK' : ret)
})

//Create a default TemplateTable
router.get('/TEMPLATEtable', async (req, res) => {
    const new_table = TEMPLATE_table
    const query = {
        text: `CREATE TABLE ${new_table} (id SERIAL PRIMARY KEY, name VARCHAR NOT NULL,  data JSONB)`,
    }
    const ret = await db.query(query)
    res.send(ret != undefined ? 'OK' : ret)
})

//Add a new Template
router.post('/template/:name', async (req, res) => {
    const json_data = req.fields
    const name = req.params.name
    if (name != undefined && json_data != undefined) {
        const ret = createTemplate(name, json_data)
        res.send(ret)
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

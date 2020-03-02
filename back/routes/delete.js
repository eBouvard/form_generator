const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()
module.exports = router

//Delete a specific table
router.get('/table/:name', async (req, res) => {
    const table_name = req.params.name
    const query = {
        text: `DROP TABLE ${table_name}`,
    }
    const ret = await db.query(query)
    res.send(ret.command == 'DROP' ? 'OK' : ret)
})

//Define the JSONTable
const JSON_table = 'json'

//Delete a specific JSONobject
router.get('/json/:id', async (req, res) => {
    const query = {
        text: `DELETE FROM ${JSON_table} WHERE ${JSON_table}.id = $1`,
        values: [req.params.id]
    }
    const { rowCount } = await db.query(query)
    res.send(rowCount == 1 ? 'OK' : 'NULL')
})

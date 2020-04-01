const Router = require('express-promise-router')
const db = require('../service/db')

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

//Delete a specific template and JSONTable associated
router.get('/template/:name', async (req, res) => {
    const name = req.params.name
    const query = {
        text: `DELETE FROM template WHERE name = $1`,
        values: [name]
    }
    const { rowCount } = await db.query(query)
    const queryJSONTable = {
        text: `DROP TABLE ${name}`,
    }
    const ret = await db.query(queryJSONTable)
    res.send(rowCount == 1 && ret.command == 'DROP' ? 'OK' : 'NULL')
})


//Delete a specific JSONobject
router.get('/:table/:id', async (req, res) => {
    const table = req.params.table
    const query = {
        text: `DELETE FROM ${table} WHERE id = $1`,
        values: [req.params.id]
    }
    const { rowCount } = await db.query(query)
    res.send(rowCount == 1 ? 'OK' : 'NULL')
})




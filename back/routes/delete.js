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
    const { ret } = await db.query(query)
    res.send(ret === undefined ? 'OK' : ret)
})
const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()
module.exports = router

//Define the JSONTable
const JSON_table = 'json'

//Add a new data into the JSONTable
router.post('/json/:id', async (req, res) => {
    const id = req.params.id
    const json_data = req.body
    if (json_data != undefined && !isNaN(id)) {
        const query = {
            text: `UPDATE ${JSON_table} SET data=$1 WHERE id=$2`,
            values: [json_data, id]
        }
        const { ret } = await db.query(query)
        return(res.send(ret === undefined ? 'OK' : ret))
    } else {
        res.send('Wrong request: no JSON data or no ID')
    }
})

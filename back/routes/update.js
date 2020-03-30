const Router = require('express-promise-router')
const db = require('../service/db')

const router = new Router()
module.exports = router


//Define the JSONTable and Template table
const JSON_table = 'json'
const TEMPLATE_table = 'template'

//Add a new data into the JSONTable
router.post('/json/:id', async (req, res) => {
    const id = req.params.id
    const json_data = req.fields
    console.log(json_data)
    if (json_data != undefined && !isNaN(id)) {
        const query = {
            text: `UPDATE ${JSON_table} SET data=$2 WHERE id=$1`,
            values: [id, json_data]
        }
        const { rowCount } = await db.query(query)
        res.send(rowCount === 1 ? 'OK' : "Invalid ID or JSON Data")
    } else {
        res.send('Wrong request: no JSON data or no ID')
    }
})

//Replace a specific part within a JSON
router.post('/json/part/:id', async (req, res) => {
    const id = req.params.id
    const json_data = req.fields
    if (!isNaN(id)) {
      const query = {
        text: `UPDATE ${JSON_table} SET data = data || $2 WHERE id=$1`,
        values: [id, json_data],
      }
      const { rowCount } = await db.query(query)
      res.send(rowCount === 1 ? 'OK' : "Invalid ID or JSON Data")
    } else {
      res.send('Wrong ID')
    }
  })

//Update a template 
router.post('/template/:name', async (req, res) => {
  const json_data = req.fields
  const name = req.params.name
  if (name != undefined && json_data != undefined) {
    const query = {
      text: `UPDATE ${TEMPLATE_table} SET data = $2 WHERE name=$1`,
      values: [name, json_data],
    }
    const { rowCount } = await db.query(query)
    const ret = rowCount === 1 ? 'OK' : "Invalid ID or JSON Data"
    res.send(ret)
  } else {
    res.send('Wrong ID')
  }
})
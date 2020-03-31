const Router = require('express-promise-router')
const fs = require('fs');
const axios = require('axios')
const db = require('../service/db')

const router = new Router()
module.exports = router

//Connection to Python API to parse the file
let parserURL = 'http://localhost:5000'

if (process.env.DOCKER != undefined) {
    parserURL = 'http://parser:5000'
}

const flask = axios.create({
    baseURL: parserURL,
    headers: { 'Access-Control-Allow-Origin': '*' },
});

async function sendToParser(path) {
    return new Promise(resolve => {
        flask.get('/file?path=' + path).then(ret => {
            const { data } = ret
            resolve(data)
        }).catch(e => {
            console.log(e)
        })
    }
    )
}

//Query to send a JSON
async function sendJSONtoDB(table, json_data) {
    const query = {
        text: `INSERT INTO ${table}(data) VALUES ($1) RETURNING id`,
        values: [json_data]
    }
    const { rows } = await db.query(query)
    return (rows[0].id)
}

//Upload a file, parse it and send it to DB 
router.post('/:table', async (req, res) => {
    const file = req.files.file
    const table = req.params.table
    const oldPath = file.path
    const newPath = oldPath.substr(0, oldPath.lastIndexOf('/') + 1) + file.name
    fs.rename(oldPath, newPath, function (e) {
        if (e) console.log('ERROR: ' + e);
    });
    let json_data = await sendToParser(newPath)
    //Mise a jour de la date et auteur
    json_data.date = new Date
    sendJSONtoDB(table, json_data).then(retDB => {
        const data = { 
            id: retDB
        } 
        res.send(data)
    })
})

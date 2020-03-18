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
        flask.get('/file?path=' + path ).then(ret => {
            const { data } = ret
            resolve(data)
        }).catch(e => {
            console.log(e)
        })
    }
    )
}

//Query to send a JSON
async function sendJSONtoDB(json_data) {
    const JSON_table = 'json'
    const query = {
        text: `INSERT INTO ${JSON_table}(data) VALUES ($1) RETURNING id`,
        values: [json_data]
    }
    const { rows } = await db.query(query)
    return(rows[0].id)
}

//Upload a file, parse it and send it to DB 
router.post('/', async (req, res) => {
    const file = req.files.file
    const oldPath = file.path
    const newPath = oldPath.substr(0, oldPath.lastIndexOf('/') + 1) + file.name
    fs.rename(oldPath, newPath, function (e) {
        if (e) console.log('ERROR: ' + e);
    });
    let json_data = await sendToParser(newPath)
    console.log(`Document:${json_data.Title}`)
    json_data = ConvertKeysToLowerCase(json_data)
    const retDB = sendJSONtoDB(json_data)
    res.sendStatus(202)
})


//Convert JSON keys to lowercase
function ConvertKeysToLowerCase(obj) {
    let output = {};
    for (i in obj) {
        if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
           output[i.toLowerCase()] = ConvertKeysToLowerCase(obj[i]);
        }else if(Object.prototype.toString.apply(obj[i]) === '[object Array]'){
            output[i.toLowerCase()]=[];
             output[i.toLowerCase()].push(ConvertKeysToLowerCase(obj[i][0]));
        } else {
            output[i.toLowerCase()] = obj[i];
        }
    }
    return output;
};
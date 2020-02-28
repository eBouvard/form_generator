const fs = require('fs')
const db = require('../db')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: '../.env' });
}
module.export = importToDB

async function importToDB(file) {
    raw = fs.readFileSync(file)
    data = JSON.parse(raw)
    for (let i = 1 ; i < 28 ; i++) {
        const table = 'scan2'
        const query = {
            text: `INSERT INTO ${table}(data) VALUES ($1) RETURNING id`,
            values: [data[i]]
        }
        const { rows } = await db.query(query)
        console.log('ID: ' + rows[0].id + ' inserted\n' + data[i] + '\n--------------\n')
    }
}

importToDB("scan.json")
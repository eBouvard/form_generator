const Router = require('express-promise-router')
const fs = require('fs');

const router = new Router()
module.exports = router

const upload_folder = process.cwd() + '/upload/'

router.post('/', async (req, res) => {
    const file = req.files
    console.log(file)
    res.sendStatus(202)
})
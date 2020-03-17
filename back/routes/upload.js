const Router = require('express-promise-router')
const fs = require('fs');

const router = new Router()
module.exports = router

router.post('/', async (req, res) => {
    const file = req.files.file
    const oldPath = file.path
    const newPath = oldPath.substr(0, oldPath.lastIndexOf('/') + 1) + file.name
    fs.rename(oldPath, newPath, function(e) {
        if ( e ) console.log('ERROR: ' + e);
    });
    res.sendStatus(202)
})
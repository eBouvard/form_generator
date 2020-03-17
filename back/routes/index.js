const read = require('./read')
const create = require('./create')
const update = require('./update')
const del = require('./delete')
const parser = require('./parser')
const upload = require('./upload')

module.exports = app => {
  app.use('/read', read),
  app.use('/create', create),
  app.use('/update', update),
  app.use('/delete', del),
  app.use('/parser', parser)
  app.use('/upload', upload)
}
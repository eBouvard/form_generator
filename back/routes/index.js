// ./routes/index.js
const read = require('./read')
const create = require('./create')
module.exports = app => {
  app.use('/read', read)
  app.use('/create', create)
}
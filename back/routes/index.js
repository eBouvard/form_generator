// ./routes/index.js
const read = require('./read')

module.exports = app => {
  app.use('/read', read)
}
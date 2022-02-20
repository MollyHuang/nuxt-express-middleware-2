// module.exports = function (req, res, next) {
//   // eslint-disable-next-line no-console
//   console.log('[index.js] req.originalUrl=', req.originalUrl)
//   next()
// }

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('[index.js] /api/index.js -- hello world')
})

module.exports = {
  path: '/api/',
  handle: app
}

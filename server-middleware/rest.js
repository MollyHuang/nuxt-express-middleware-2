// https://nuxtjs.org/docs/configuration-glossary/configuration-servermiddleware/#custom-api-endpoint

const bodyParser = require('body-parser')
const app = require('express')()

// http://localhost/server-middleware/getJSON
app.use(bodyParser.json())
app.all('/getJSON', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('[server-middleware/rest.js] req.url=', req.url)
  res.json({ data: 'data' })
})

module.exports = app

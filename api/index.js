module.exports = function (req, res, next) {
  // eslint-disable-next-line no-console
  console.log('[index.js] req.originalUrl=', req.originalUrl)
  next()
}

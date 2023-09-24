/* ---- Methods ---- */

function densyyHelmet (_req, res, next) {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')

  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')

  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.removeHeader('X-Powered-By')
  res.removeHeader('Server')
  res.removeHeader('ETag')

  next()
}

module.exports = { densyyHelmet }

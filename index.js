const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const PORT = process.env.HOST || "0.0.0.0"

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, HOST, () => console.log(`Listening on ${ PORT }`))

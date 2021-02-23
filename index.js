const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const router = require('./src/routes')
const PORT = process.env.PORT
const app = express()
require('dotenv').config()
app.use(bodyparser.json({ extended: true }))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.use(router)
app.listen(process.env.PORT || 5432, '0.0.0.0', null, () =>
  console.log('server running')
)

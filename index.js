const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const router = require('./src/routes')
const PORT = process.env.PORT || 8081
const app = express()

app.use(bodyparser.json({ extended: true }))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.use(router)
app.listen(PORT, '0.0.0.0', null, () => console.log('server running'))

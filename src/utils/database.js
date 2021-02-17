const { Client } = require('pg')
require('dotenv').config()

const client = new Client({
  host: process.env.HOST,
  port: process.env.PORT,
  password: process.env.PW,
  user: process.env.USER,
  database: process.env.DATABASE,
  ssl: {
    rejectUnauthorized: false
  }
})

client
  .connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack))

module.exports = client

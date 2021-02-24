const { Client } = require('pg')
require('dotenv').config()

const client = new Client({
  host: process.env.DB_HOST,
  port: 5432,
  password: process.env.DB_PW,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  }
})

client
  .connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error rip', err))

module.exports = client

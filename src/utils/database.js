const { Client } = require('pg')
require('dotenv').config()

const client = new Client({
  //   connectionString: process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PW,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  }
})

// DATABASE_URL=postgres://yzerxjgrfahvbc:1cb068595cde9fadc98378d39b5843a17ce1834913ad9945506f46973dde6547@ec2-54-164-238-108.compute-1.amazonaws.com:5432/d6n3m2pbmq89co

client
  .connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error rip', err))

module.exports = client

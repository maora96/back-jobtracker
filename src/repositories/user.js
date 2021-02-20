const database = require('../utils/database')

const addUser = async (email, password, name) => {
  const q = {
    text: `INSERT INTO users 
    (id, name, email, password)
    VALUES (DEFAULT, $1, $2, $3) RETURNING *`,
    values: [name, email, password]
  }
  const query = await database.query(q)
  return query.rows
}

const getUserById = async id => {
  const q = {
    text: 'select * from users where id = $1',
    values: [id]
  }

  const query = await database.query(q)
  return query.rows[0]
}

const getUserByEmail = async email => {
  const q = {
    text: 'select * from users where email = $1',
    values: [email]
  }

  const query = await database.query(q)
  return query.rows[0]
}

const deleteUser = async id => {
  const q = {
    text: 'delete from users where id = $1 returning *',
    values: [id]
  }

  const query = await database.query(q)
  return query.rows[0]
}

const getEntriesByUserId = async id => {
  const q = {
    text: 'select * from entries where user_id = $1',
    values: [id]
  }

  const query = await database.query(q)
  return query.rows[0]
}

module.exports = {
  addUser,
  getUserById,
  getUserByEmail,
  deleteUser,
  getEntriesByUserId
}

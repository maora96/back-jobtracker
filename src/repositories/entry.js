const database = require('../utils/database')

const addEntry = async (user_id, company, role, level, skills, recruiter) => {
  console.log('hi')
  const q = {
    text: `insert into entries (id, user_id, company, role, level, skills, recruiter) values (default, ${user_id}, '${company}', '${role}', '${level}', '{${skills}}', '${recruiter}') returning *`
  }
  console.log(q)
  const query = await database.query(q)
  console.log('hi', query)
  return query.rows
}

const getAllEntries = async () => {
  const q = {
    text: 'select * from entries'
  }

  const query = await database.query(q)
  return query.rows
}

const getEntryById = async id => {
  const q = {
    text: 'select * from entries where id = $1',
    values: [id]
  }

  const query = await database.query(q)
  return query.rows
}

const getInteractionsByEntryId = async id => {
  const q = {
    text: 'select * from interactions where entry_id = $1',
    values: [id]
  }

  const query = await database.query(q)
  return query.rows
}

const deleteEntryById = async id => {
  const q = {
    text: 'delete from entries where id = $1 returning *',
    values: [id]
  }

  const query = await database.query(q)
  return query.rows
}

const updateEntryById = async (company, role, level, skills, recruiter, id) => {
  const q = {
    text: `update entries set company = '${company}', role = '${role}', level = '${level}', skills = '{${skills}}', recruiter = '${recruiter}' where id = ${id} returning *`
  }

  const query = await database.query(q)
  return query.rows
}

module.exports = {
  addEntry,
  getAllEntries,
  getEntryById,
  getInteractionsByEntryId,
  deleteEntryById,
  updateEntryById
}

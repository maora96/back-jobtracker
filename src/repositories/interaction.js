const database = require('../utils/database')

const addInteraction = async (
  entry_id,
  type,
  date,
  links,
  expected_response
) => {
  const q = {
    text: `insert into interactions (id, entry_id, type, date, links, expected_response) values (default, ${entry_id}, '${type}', '${date}', '{${links}}', '${expected_response}') returning *`
  }

  const query = await database.query(q)
  return query.rows
}

const getInteractionById = async id => {
  const q = {
    text: 'select * from interactions where id = $1',
    values: [id]
  }

  const query = await database.query(q)
  return query.rows
}

const deleteInteractionById = async id => {
  const q = {
    text: 'delete from interactions where id = $1 returning *',
    values: [id]
  }

  const query = await database.query(q)
  return query.rows
}

const updateInteractionById = async (
  type,
  date,
  links,
  expected_response,
  id
) => {
  const q = {
    text: `update interactions set type = '${type}', date = '${date}', links = '{${links}}', expected_response = '${expected_response}' where id = ${id} returning *`
  }

  const query = await database.query(q)

  return query.rows
}

module.exports = {
  addInteraction,
  getInteractionById,
  deleteInteractionById,
  updateInteractionById
}

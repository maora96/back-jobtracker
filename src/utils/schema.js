const database = require('./database')

const schema = {
  1: `create table if not exists users
    (
        id serial not null primary key,
        name text not null, 
        email text not null, 
        password text not null
    );`,
  2: `create table if not exists entries
    (
        id serial not null primary key,
        user_id integer not null, 
        company text, 
        role text, 
        level text,
        skills text[],
        recruiter text
    );`,
  3: `create table if not exists interactions
    (
        id serial not null primary key,
        entry_id integer not null,
        type text, 
        on_day date,
        links text[],
        expected_response date 
    );`
}

const drop = async table => {
  if (table) {
    await database.query(`drop table ${table}`)
    console.log('table dropped')
  }
}

const up = async (number = null) => {
  if (!number) {
    for (const value in schema) {
      await database.query({ text: schema[value] })
    }
    console.log('migration successful')
  } else {
    await database.query({ text: schema[number] })
  }
}

drop('entries')
drop('users')
drop('interactions')
up()

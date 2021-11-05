'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Review'
const tableName = 'reviews'

const selectableProps = [
  'id',
  'name',
  'equipament_id',
  'description',
  'stars',
  'created_at'
]

module.exports = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps
  })

  return {
    ...guts
  }
}


'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Category'
const tableName = 'categories'

const selectableProps = [
  'id',
  'name',
  'updated_at',
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

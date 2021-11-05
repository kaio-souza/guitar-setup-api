'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Equipament'
const tableName = 'equipaments'

const selectableProps = [
  'id',
  'name',
  'description',
  'category_id',
  'company_id',
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

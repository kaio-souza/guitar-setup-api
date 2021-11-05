'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Subcategory'
const tableName = 'subcategories'

const selectableProps = [
  'id',
  'name',
  'category_id',
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

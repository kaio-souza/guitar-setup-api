'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Company'
const tableName = 'companies'

const selectableProps = [
  'id',
  'name',
  'website',
  'logo',
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

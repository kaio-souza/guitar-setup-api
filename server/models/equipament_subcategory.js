'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'EquipamentSubcategory'
const tableName = 'equipament_subcategories'

const selectableProps = [
  'equipament_id',
  'subcategory_id',
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

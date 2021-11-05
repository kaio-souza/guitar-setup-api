exports.up = knex => {
  return knex.schema.createTable('equipaments_subcategories', t => {
    t.integer('equipament_id').references('equipaments.id').unsigned().index().onDelete('CASCADE')
    t.integer('subcategory_id').references('subcategories.id').unsigned().index().onDelete('CASCADE')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('equipaments_subcategories')
}

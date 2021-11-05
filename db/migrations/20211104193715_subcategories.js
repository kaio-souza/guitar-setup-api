exports.up = knex => {
  return knex.schema.createTable('subcategories', t => {
    t.increments('id').primary().unsigned()
    t.string('name').unique().index()
    t.integer('category_id').references('categories.id').unsigned().index().onDelete('CASCADE')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = knex => {
  return knex.schema.dropTable('subcategories')
}

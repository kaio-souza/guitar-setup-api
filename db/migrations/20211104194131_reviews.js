exports.up = knex => {
  return knex.schema.createTable('reviews', t => {
    t.increments('id').primary().unsigned()
    t.integer('equipament_id').references('equipaments.id').unsigned().index().onDelete('CASCADE')
    t.string('name')
    t.text('description')
    t.integer('stars').unsigned()
    t.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = knex => {
  return knex.schema.dropTable('reviews')
}

exports.up = knex => {
  return knex.schema.createTable('companies', t => {
    t.increments('id').primary().unsigned()
    t.string('name').unique().index()
    t.string('website')
    t.string('logo')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = knex => {
  return knex.schema.dropTable('companies')
}

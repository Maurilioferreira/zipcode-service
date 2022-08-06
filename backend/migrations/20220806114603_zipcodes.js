/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('zipcodes', table => {
    table.increments('id').primary()
    table.string('zip').notNull()
    table.string('country').notNull()
    table.string('countryAbbreviation').notNull()
    table.string('places').notNull()
    table.string('created').notNull()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('zipcodes')
};

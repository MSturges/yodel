
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.float('lat', 8, 8),
    table.float('long', 8, 8),
    table.boolean('active')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

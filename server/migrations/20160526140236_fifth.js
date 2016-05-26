
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.string('interests')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

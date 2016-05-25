
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.dropColumn('lat'),
    table.dropColumn('long')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

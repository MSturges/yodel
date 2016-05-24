
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.renameColumn('firstname', 'username'),
    table.dropColumn('email'),
    table.float('lat', 4),
    table.float('long', 4)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

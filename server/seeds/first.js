
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({firstname: 'Alan', email: 'alan@gmail.com', password: 'password'}),
    knex('users').insert({firstname: 'Blake', email: 'blake@gmail.com', password: 'password'}),
    knex('users').insert({firstname: 'Coleman', email: 'coleman@gmail.com', password: 'password'}),
    knex('users').insert({firstname: 'James', email: 'james@gmail.com', password: 'password'}),
    knex('users').insert({firstname: 'Matt', email: 'matt@gmail.com', password: 'password'}),
    knex('users').insert({firstname: 'Max', email: 'max@gmail.com', password: 'password'})
  );
};

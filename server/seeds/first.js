
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({username: 'Galvanize', password: 'password', lat: 40.017562, long: -105.281545}),
    knex('users').insert({username: 'Coleman123', password: 'password', lat:40.017562, long:-105.281545}),
    knex('users').insert({username: 'James123', password: 'password', lat: 40.018008, long:-105.279489}),
    knex('users').insert({username: 'Matt123', password: 'password', lat:40.019719, long:-105.270981}),
    knex('users').insert({username: 'Max123', password: 'password', lat: 40.029228, long:-105.225009})
  );
};

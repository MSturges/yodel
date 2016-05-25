
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({username: 'Galvanize', password: 'password', lat: 40.0175628230948, long: -105.281545, active: true}),
    knex('users').insert({username: 'Coleman123', password: 'password', lat:40.01756243240, long:-105.281545, active: true}),
    knex('users').insert({username: 'James123', password: 'password', lat: 40.0180020938408, long:-105.279489, active: true}),
    knex('users').insert({username: 'Matt123', password: 'password', lat:40.019719239048092, long:-105.270981, active: true}),
    knex('users').insert({username: 'Max123', password: 'password', lat: 40.0292282390489023, long:-105.225009, active: true})
  );
};


exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({username: 'Denver', password: 'password', lat: 39.7752, long: -105.0493, active: true}),
    knex('users').insert({username: 'New York', password: 'password', lat:40.6554, long:-74.01545, active: true}),
    knex('users').insert({username: 'London', password: 'password', lat: 51.5708, long: 0, active: true}),
    knex('users').insert({username: 'Moscow', password: 'password', lat:55.7565, long: 37.6173, active: true}),
    knex('users').insert({username: 'Tokyo', password: 'password', lat: 35.6754, long:139.6925, active: true}),
    knex('users').insert({username: 'Broadway & Pearl, 0', password: 'password', lat: 40.01791, long:-105.28001, active: true}),
    knex('users').insert({username: '13th & Pearl, 0.07 miles', password: 'password', lat: 40.01821, long:-105.27871, active: true}),
    knex('users').insert({username: '14th & Pearl, 0.14 miles', password: 'password', lat: 40.01841, long:-105.27731, active: true}),
    knex('users').insert({username: '19th & Pearl, 0.51 miles', password: 'password', lat: 40.01981, long:-105.27081, active: true}),
    knex('users').insert({username: 'Airport, 3 miles', password: 'password', lat: 40.03791, long:-105.22981, active: true})

  );
};

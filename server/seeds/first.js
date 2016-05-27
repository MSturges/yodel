
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({username: 'Denver', password: 'password', lat: 39.7752, long: -105.0493, interests:'', active: true}),
    knex('users').insert({username: 'New York', password: 'password', lat:40.6554, long:-74.01545, interests:'', active: true}),
    knex('users').insert({username: 'London', password: 'password', lat: 51.5708, long: 0, interests:'', active: true}),
    knex('users').insert({username: 'Moscow', password: 'password', lat:55.7565, long: 37.6173, interests:'', active: true}),
    knex('users').insert({username: 'Tokyo', password: 'password', lat: 35.6754, long:139.6925, interests:'', active: true}),
    knex('users').insert({username: 'Broadway & Pearl', password: 'password', lat: 40.01791, long:-105.28001, interests:'coding, snowboarding, beer', active: true}),
    knex('users').insert({username: '13th & Pearl', password: 'password', lat: 40.01821, long:-105.27871, interests:'lemurs, tea, food, cats, beer', active: true}),
    knex('users').insert({username: '14th & Pearl', password: 'password', lat: 40.01841, long:-105.27731, interests:'dogs, cats, food, books, lemurs', active: true}),
    knex('users').insert({username: '19th & Pearl', password: 'password', lat: 40.01981, long:-105.27081, interests:'dogs, cats, animals, boulder, coding, cheese, reddit, soccer, travel, eating, soccer', active: true}),
    knex('users').insert({username: 'Boulder Municipal Airport', password: 'password', lat: 40.03791, long:-105.22981, interests:'airplanes, aircraft, helicopters, travel, transportation, flying, aviation, gliders', active: true}),
    knex('users').insert({username: 'Cooper', password: 'password', lat: 40.01791, long:-105.15001, interests:'coding, snowboarding, beer', active: true}),
    knex('users').insert({username: 'Bud', password: 'password', lat: 40.01821, long:-105.23871, interests:'lemurs, tea, food, cats, beer', active: true}),
    knex('users').insert({username: 'Seth', password: 'password', lat: 40.01841, long:-105.32731, interests:'dogs, cats, food, books, lemurs', active: true}),
    knex('users').insert({username: 'Nate', password: 'password', lat: 40.01981, long:-105.28081, interests:'dogs, cats, animals, boulder, coding, cheese, reddit, soccer, travel, eating, soccer', active: true}),
    knex('users').insert({username: 'Daniel', password: 'password', lat: 40.03791, long:-105.29981, interests:'airplanes, aircraft, helicopters, travel, transportation, flying, aviation, gliders', active: true}),
    knex('users').insert({username: 'Brad', password: 'password', lat: 40.01791, long:-105.3001, interests:'coding, snowboarding, beer', active: true}),
    knex('users').insert({username: 'Mike', password: 'password', lat: 40.01821, long:-105.24871, interests:'lemurs, tea, food, cats, beer', active: true}),
    knex('users').insert({username: 'Max', password: 'password', lat: 40.01841, long:-105.1931, interests:'dogs, cats, food, books, lemurs', active: true}),
    knex('users').insert({username: 'James', password: 'password', lat: 40.01981, long:-105.20081, interests:'dogs, cats, animals, boulder, coding, cheese, reddit, soccer, travel, eating, soccer', active: true}),
    knex('users').insert({username: 'Matt', password: 'password', lat: 40.03791, long:-105.21981, interests:'airplanes, aircraft, helicopters, travel, transportation, flying, aviation, gliders', active: true})
  );
};

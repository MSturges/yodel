var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users').select().then(function(results){
    res.json(results)
  })
});



router.post('/newlocation', function(req, res, next) {
  knex('users')
  .insert(req.body)
  .returning('*')
  .then(function(results){
    res.json(results)
  })
});

//signup w/ bcrypt

router.post('/signup', function(req, res, next) {
  console.log('postrequest received')
  knex('users')
    .whereRaw('lower(username) = ?', req.body.username.toLowerCase())
    .count()
    .first()
    .then(function(result) {
      if (result.count === "0") {
        var saltRounds = 4;
        var passwordHash = bcrypt.hashSync(req.body.password, saltRounds)
        console.log('inserting')
        knex('users').insert({
            username: req.body.username,
            password: passwordHash
          })
          .returning('*').then(function(userReturn) {
            var user = (userReturn[0])
            // var token = jwt.sign({
            //   id: user.id
            // }, 'secret')

            res.json({
              id: user.id,
              email: user.email,
              name: user.name,
              // token: token
            })
          })
      } else {
        res.status(422).json({
          errors: ['Email already taken']
        })
      }
    })
})


module.exports = router;

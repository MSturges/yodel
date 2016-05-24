var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users').select().then(function(results){
    res.json(results)
  })
});

router.get('/buddylist', function(req, res, next){
  knex('users').where('lat', '>',  39).then(function(results){
    res.json(results)
  })
})



router.post('/newlocation', function(req, res, next) {
  knex('users')
  .insert(req.body)
  .returning('*')
  .then(function(results){
    res.json(results)
  })
});

//login w/token

router.get('/me', function(req, res, next) {

  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // payload is {id: 56}
    knex('users').where({id: payload.id}).first().then(function (user) {
      if (user) {
        res.json({id: user.id, name: user.name})
      } else {
        res.status(403).json({
          error: "Invalid ID"
        })
      }
    })
  } else {
    res.status(403).json({
      error: "No token"
    })
  }
})


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
            var token = jwt.sign({
              id: user.id
            }, 'secret')
            res.json({
              id: user.id,
              name: user.username,
              token: token
            })
          })
      } else {
        res.status(422).json({
          errors: ['Email already taken']
        })
      }
    })
})

//login w/ bcrypt


router.post('/login', function(req, res, next) {

  knex('users').where('username', req.body.username).then(function(user) {
    if (bcrypt.compareSync(req.body.password, user[0].password)) {
      var token = {};
      token.id = user[0].id;
      res.json(token)
    } else {
      res.send('login failed')
    }
  })
})


module.exports = router;

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

module.exports = router;

//signup

// router.post('/', function(req, res, next){
//   knex('users').where('name')
// })

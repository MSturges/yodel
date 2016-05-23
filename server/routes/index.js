var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users').select().then(function(results){
    res.json(results)
  })
});

module.exports = router;

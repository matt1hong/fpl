var express = require('express');
var request = require('request');
var router = express.Router();

var opts;

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Fantasy Premier League' });
});

module.exports = router;

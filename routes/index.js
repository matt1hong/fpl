var express = require('express');
var request = require('request');
var d3 = require('d3');
var router = express.Router();

var opts;

/* GET home page. */

router.get('/', function(req, res) {
	opts = {
		url: "http://fantasy.premierleague.com/web/api/elements/"
			+ req.query.id,
		timeout: 10000,
		json:true
	}

	// Request data from Premier League
	request(opts, function(err, res, body) {

		if (err) {
			console.dir(err);
			return;
		}

		console.log(body.first_name 
			+ ' ' + body.second_name);
	})
	
  res.render('index', { title: req.query.id1 });
});

module.exports = router;

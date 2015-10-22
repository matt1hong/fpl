var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var router = express.Router();
router.use(bodyParser.json());

var opts;

/* GET home page. */

router.get('/', function(req, res) {
	opts = {
		url: "http://fantasy.premierleague.com/web/api/elements/"
			+ req.query.id1,
		timeout: 10000,
		json:true
	}

	// Request data from FPL
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

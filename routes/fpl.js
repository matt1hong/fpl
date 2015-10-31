var express = require('express');
var request = require('request');
var d3 = require('d3');
var jsdom = require('jsdom-no-contextify');
var barChart = require('../barChart.js');
var router = express.Router();

var opts;

// d3.select("body").datum(recentPoints).call(chart)

router.get('/', function(req, res) {
	opts = {
		url: "http://fantasy.premierleague.com/web/api/elements/"
			+ req.query.id1,
		timeout: 10000,
		json:true
	}
	var recentPoints = [];
	// Request data from Premier League
	request(opts, function(error, response, body) {
		console.log(opts.url)

		if (error) {
			console.dir(error);
			return;
		}

		var games = body.fixture_history["all"];

		var recentGames = games.slice(games.length-7, games.length);

		for (var i = 0; i < recentGames.length; i++) {
			recentPoints.push({
				name: recentGames[i][2],
				value: recentGames[i][19],
			})
		};

		console.log(recentPoints)

		console.log(body.first_name 
			+ ' ' + body.second_name);

		var chart = barChart();

		jsdom.env({
			html: '<body></body>',
			done: function(err, window){
				// console.log(window.document.querySelector('body').innerHTML)
				var el = window.document.querySelector('body');
				d3.select(el).datum(recentPoints).call(chart)
				res.send({
					svg:window.document.querySelector('body').innerHTML,
					id: req.query.id1
				})
			}
		})
		// d3.select("body").datum(recentPoints).call(chart)
	})
	
  // res.render('index', { title: req.query.id1 });
});

module.exports = router;
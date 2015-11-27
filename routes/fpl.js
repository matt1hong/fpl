var express = require('express');
var request = require('request');
var d3 = require('d3');
var jsdom = require('jsdom-no-contextify');

var BarChart = require('../barChart.js');
var barChart = BarChart.barChart;
var stacked = BarChart.stackedBarChart;

var Player = require('../fplData.js');

var router = express.Router();

var opts;

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

		var player = new Player(body);

		var chart = stacked()
			.xMap(function (d) { return d["Game"]; })
			.yMap(function (d) { return d["Total"]; });

		jsdom.env({
			html: '<body></body>',
			done: function(err, window){
				// console.log(window.document.querySelector('body').innerHTML)
				var el = window.document.querySelector('body');
				d3.select(el).datum(player.recentPoints(7)).call(chart)
				res.send({
					svg:window.document.querySelector('body').innerHTML,
					id: req.query.id1
				})
			}
		})
	})
	
  // res.render('index', { title: req.query.id1 });
});

module.exports = router;
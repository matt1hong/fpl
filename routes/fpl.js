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

		// var chart = barChart()
		// 	.xMap(function(d) {return d.Game;})
		// 	.yMap(function (d) { 
		// 		var sum = 0;
		// 		for (prop in d) {
		// 			if (d.hasOwnProperty(prop) && prop !== 'Game') {
		// 				sum += d[prop];
		// 			}
		// 		}
		// 		return sum;
		// 	});

		var chart = stacked()
			.xVar('Game')
			.colorScale(d3.scale.ordinal().range([
				'#d9d9d9', // Minutes played, grey
			    '#9ecae1', // Assists, light blue
			    '#3182bd', // Goals, blue
			    '#31a354', // Clean sheets, green
			    '#a1d99b', // Saves, light green
			    '#e377c2', // Penalties saved, pink
			    '#f7b6d2', // Bonus, light pink

			    '#fdd0a2', // Conceded, light yellow
			    '#fd8d3c', // Yellow cards, orange
			    '#fd8d3c', // Red cards, orange
			    '#e6550d', // Own goals, red
			    '#756bb1' // Penalties missed, purple
		    ]));
			console.log(player.lastName)
			console.log(player.recentPoints(7))
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
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
			+ req.query.id,
		timeout: 10000,
		json:true
	}

	var label = 'Game';
	var recentPoints = [];
	// Request data from Premier League
	request(opts, function(error, response, body) {

		if (error) {
			console.dir(error);
			return;
		}

		var player = new Player(body);

		var chart = barChart()
			.xMap(function(d) {return d[label];})
			.yMap(function(d) {return posSum(d) + negSum(d);});

		var stackedChart = stacked()
			.height(114)
			.width(171)
			.margin(5,0,4,20)
			.xVar(label)
			.yAxis(d3.svg.axis()
				.orient('left')
				.ticks(3))
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

		jsdom.env({
			html: '<body></body>',
			done: function(err, window){
				var el = window.document.querySelector('body');
				d3.select(el).datum(player.recentPoints(7)).call(stackedChart)
				res.send({
					svg: window.document.querySelector('body').innerHTML,
					max: d3.max(player.recentPoints(7), posSum),
					min: d3.min(player.recentPoints(7), negSum),
					lastName: player.lastName
				})
			}
		});

		function posSum (d) {
			var total = 0;
				for (prop in d) {
					if (d.hasOwnProperty(prop) && prop !== label && d[prop] > 0) {
						total += d[prop];
					}
				}
			return total;
		}

		function negSum (d) {
			var total = 0;
				for (prop in d) {
					if (d.hasOwnProperty(prop) && prop !== label && d[prop] < 0) {
						total += d[prop];
					}
				}
			return total;
		}
	})
});

module.exports = router;
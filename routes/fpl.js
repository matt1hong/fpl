var express = require('express');
var request = require('request');
var d3 = require('d3');
var jsdom = require('jsdom-no-contextify');
var barChart = require('../barChart.js');
var router = express.Router();

var opts;

function Player (data) {
	this.firstName = data.first_name;
	this.lastName = data.second_name;
	this.id = data.id;
	this.position = data.type_name;
	this.team = +data.team;

	this.playing = data.chance_of_playing_next_round;

	this.dreamTeam = data.in_dreamteam;
	this.dreamTeamCount = data.dreamteam_count;

	this.selectedBy = +data.selected_by;
	this.cost = +data.now_cost / 10;

	this.totalPoints = +data.total_points;
	this.form = +data.form; // over three matches

	this.eaIndex = +data.ea_index;
	this.totalBonus = +data.bps;

	this.historical = [];
	for (var i = 0; i < data.season_history.length; i++) {
		this.historical.push({
			label: data.season_history[i][0],
			value: data.season_history[i][16],
		});
	};

	var games = data.fixture_history["all"];

	this.recentPoints = function (numGames) {
		var data = [];
		var recentGames = games.slice(games.length-7, games.length);
		for (var i = 0; i < recentGames.length; i++) {
			data.push({
				label: recentGames[i][2],
				value: recentGames[i][19],
			});
		};
		return data;
	};
}

function Goalkeeper (data) {
	Player.call(this, data);

	this.stats = []
}

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

		var position = body.type_name;
		console.log(body)
		var games = body.fixture_history["all"];

		var recentGames = games.slice(games.length-7, games.length);
		console.log(recentGames)
		console.log(body.fixtures.all)

		for (var i = 0; i < recentGames.length; i++) {
			recentPoints.push({
				label: recentGames[i][2],
				value: recentGames[i][19],
			})
		};

		console.log(recentPoints)

		console.log(body.first_name 
			+ ' ' + body.second_name);

		var chart = barChart().chartType('stacked');

		// jsdom.env({
		// 	html: '<body></body>',
		// 	done: function(err, window){
		// 		// console.log(window.document.querySelector('body').innerHTML)
		// 		var el = window.document.querySelector('body');
		// 		d3.select(el).datum(recentPoints).call(chart)
		// 		res.send({
		// 			svg:window.document.querySelector('body').innerHTML,
		// 			id: req.query.id1
		// 		})
		// 	}
		// })
	})
	
  // res.render('index', { title: req.query.id1 });
});

module.exports = router;
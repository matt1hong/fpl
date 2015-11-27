function Player (data) {
	// Bio
	this.firstName = data.first_name;
	this.lastName = data.second_name;
	this.id = data.id;
	this.position = data.type_name;
	this.team = +data.team;

	// Availability
	this.availability = data.chance_of_playing_next_round;

	// Dream team
	this.dreamTeam = data.in_dreamteam;
	this.dreamTeamCount = data.dreamteam_count;

	// Market
	this.selectedBy = +data.selected_by;
	this.cost = +data.now_cost / 10;

	// Summary
	this.totalPoints = +data.total_points;
	this.form = +data.form; // over 30 days
	this.eaIndex = +data.ea_index;
	this.totalBonus = +data.bps;

	// History
	this.historical = [];
	for (var i = 0; i < data.season_history.length; i++) {
		this.historical.push({
			label: +data.season_history[i][0],
			total: +data.season_history[i][16],
		});
	};

	// Stats
	var games = data.fixture_history["all"];
	this.recentStats = function (numGames) {
		var data = [];
		var recentGames = games.slice(games.length-7, games.length);
		for (var i = 0; i < numGames; i++) {
			data.push({
				label: recentGames[i][2],
				gameTime: +recentGames[i][3],
				goals: +recentGames[i][4],
				assists: +recentGames[i][5],
				cleanSheets: +recentGames[i][6],
				conceded: +recentGames[i][7],
				ownGoals: +recentGames[i][8],
				penaltiesSaved: +recentGames[i][9],
				penaltiesMissed: +recentGames[i][10],
				yellowCards: +recentGames[i][11],
				redCards: +recentGames[i][12],
				saves: +recentGames[i][13],
				bonus: +recentGames[i][14],
				total: +recentGames[i][19]
			});
		};
		return data;
	};

	this.recentPoints = function (numGames) {
		var PointsSystem;
		switch (this.position) {
			case "Goalkeeper":
				PointsSystem = GoalkeeperPoints;
			case "Defender":
				PointsSystem = DefenderPoints;
			case "Midfielder":
				PointsSystem = MidfielderPoints;
			case "Forward":
				PointsSystem = ForwardPoints;
		}
		var stats = this.recentStats(numGames);
		var data = [];
		for (var i = 0; i < numGames; i++) {
			data.push(new PointsSystem(stats[i]));
		};
		return data;
	};
}

function Points (stats) {
	this["Game"] = stats.label;

	stats.gameTime >= 60 ? this["Minutes played"] = 2 : this["Minutes played"] = 1;
	this["Assists"] = stats.assists * 3;
	this["Penalties saved"] = stats.penaltiesSaved * 5;
	this["Penalties missed"] = stats.penaltiesMissed * -2;
	this["Bonus"] = stats.bonus;
	this["Yellow cards"] = stats.yellowCards * -1;
	this["Red cards"] = stats.redCards * -3;
	this["Own goals"] = stats.ownGoals * -2;
	this["Total"] = stats.total;

	// Position-dependent points
	this["Goals"] = 0;
	this["Clean sheets"] = 0;
	this["Saves"] = 0;
	this["Conceded"] = 0;
}

function GoalkeeperPoints (stats) {
	DefenderPoints.call(this, stats);

	this["Saves"] = Math.floor(stats.saves / 3);
}

function DefenderPoints (stats) {
	Points.call(this, stats);

	this["Goals"] = stats.goals * 6;
	this["Clean sheets"] = stats.cleanSheets * 4;
	this["Conceded"] = Math.floor(stats.conceded / 2) * -1;
}

function MidfielderPoints (stats) {
	Points.call(this, stats);

	this["Goals"] = stats.goals * 5;
	this["Clean sheets"] = stats.cleanSheets;
}

function ForwardPoints (stats) {
	Points.call(this, stats);

	this["Goals"] = stats.goals * 4;
}

module.exports = Player;
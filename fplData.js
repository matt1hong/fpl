function Stats (game) {
	this.label = game[2];
	this.gameTime = +game[3];
	this.goals = +game[4];
	this.assists = +game[5];
	this.cleanSheets = +game[6];
	this.conceded = +game[7];
	this.ownGoals = +game[8];
	this.penaltiesSaved = +game[9];
	this.penaltiesMissed = +game[10];
	this.yellowCards = +game[11];
	this.redCards = +game[12];
	this.saves = +game[13];
	this.bonus = +game[14];
	this.total = +game[19];
}

function Player (data) {
	// console.log(data.fixture_history.summary)
	// Bio
	this.firstName = data.first_name;
	this.lastName = data.web_name;
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
	this.recentPoints = function (numGames) {
		var PointsSystem;
		switch (this.position) {
			case "Goalkeeper":
				PointsSystem = GoalkeeperPoints; break;
			case "Defender":
				PointsSystem = DefenderPoints; break;
			case "Midfielder":
				PointsSystem = MidfielderPoints; break;
			case "Forward":
				PointsSystem = ForwardPoints; break;
		}

		var recentGames = games.slice(games.length - numGames, games.length);
		var data = [];
		for (var i = 0; i < numGames; i++) {
			data.push(new PointsSystem(new Stats(recentGames[i])));
		};
		return data;
	};
}

function Points (stats) {
	this["Game"] = stats.label;

	this["Minutes played"] = 0;
	if (stats.gameTime >= 60) {
		this["Minutes played"] = 2;
	} else if (stats.gameTime > 0) {
		this["Minutes played"] = 1;
	}

	this["Assists"] = stats.assists * 3;
	this["Goals"] = 0;
	this["Clean sheets"] = 0;
	this["Saves"] = 0;
	this["Penalties saved"] = stats.penaltiesSaved * 5;
	this["Bonus"] = stats.bonus;

	this["Conceded"] = 0;
	this["Yellow cards"] = stats.yellowCards * -1;
	this["Red cards"] = stats.redCards * -3;
	this["Own goals"] = stats.ownGoals * -2;
	this["Penalties missed"] = stats.penaltiesMissed * -2;
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
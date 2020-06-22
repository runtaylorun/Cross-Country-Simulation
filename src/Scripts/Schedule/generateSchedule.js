export const generateSchedule = (teams) => {
	const weeksInSeason = 8;
	const schedule = [];
	const weeks = [[], [], [], [], [], [], [], []];
	const teamMap = new Map();
	console.log('teams', teams);

	teams.forEach((team) => {
		teamMap.set(team.teamId, new Map());
	});

	for (let i = 0; i < weeksInSeason; i++) {
		teams.forEach((team) => {
			console.log(`Currently on ${team.name} Looking at week ${i + 1}`);
			let currentMap = teamMap.get(team.teamId);

			if (team.teamId === teams[i].teamId) {
				console.log(`Moving to next team, ${team.name} cant schedule themselves`);
				return;
			}

			if (teamPlaysThisWeek(team.teamId, weeks[i])) {
				console.log(`Exited early ${team.name} already plays this week`);
				return;
			}

			if (
				currentMap.has(teams[i].teamId) ||
				teamPlaysThisWeek(teams[i].teamId, weeks[i]) ||
				appearsOnOtherTeamsSchedule(teamMap.get(teams[i].teamId), team.teamId)
			) {
				if (teamPlaysThisWeek(team.teamId, weeks[i])) {
					return;
				}
				console.log(`${teams[i].name} is already playing this week or already plays ${team.name}`);
				let q = 0;
				while (q < weeksInSeason) {
					if (
						currentMap.has(teams[q].teamId) ||
						teamPlaysThisWeek(team.teamId, weeks[i]) ||
						teamPlaysThisWeek(teams[q].teamId, weeks[i]) ||
						appearsOnOtherTeamsSchedule(teamMap.get(teams[q].teamId), team.teamId) ||
						team.teamId === teams[q].teamId
					) {
						console.log(`${team.name} vs ${teams[q].name} is not a valid matchup`);
						q++;
						continue;
					} else {
						console.log(`Adding ${team.name} vs ${teams[q].name} to the schedule`);
						let otherMap = teamMap.get(teams[q].teamId);
						otherMap.set(team.teamId, team);
						schedule.push(createRace(team, teams[q], i + 1));
						currentMap.set(teams[q].teamId, teams[q]);
						weeks[i].push(team);
						weeks[i].push(teams[q]);
						break;
					}
				}
			} else {
				console.log(`Adding ${team.name} vs ${teams[i].name} to the schedule`);
				let otherMap = teamMap.get(teams[i].teamId);
				schedule.push(createRace(team, teams[i], i + 1));
				otherMap.set(team.teamId, team);
				currentMap.set(teams[i].teamId, teams[i]);
				weeks[i].push(team);
				weeks[i].push(teams[i]);
			}
		});
	}
	console.log(weeks);
	console.log('schedule', schedule);
};

const createRace = (team1, team2, week) => {
	return {
		week: week,
		team1: team1,
		team2: team2,
	};
};

/* const checkTimesTeamPlays = (schedule, teams) => {
	teams.forEach((team) => {
		console.log('team', team);
		console.log(schedule.filter((race) => race.team1.teamId === team.teamId || race.team2.teamId === team.teamId));
	});
}; */

const appearsOnOtherTeamsSchedule = (otherMap, currentTeamId) => {
	return otherMap.has(currentTeamId) ? true : false;
};

const teamPlaysThisWeek = (teamId, week) => {
	if (week.filter((team) => team.teamId === teamId).length > 0) {
		return true;
	} else {
		return false;
	}
};

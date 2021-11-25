export const generateSchedule = (teams, weeksInSeason) => {
  const leagueSchedule = initializeLeagueSchedule(weeksInSeason)
  const weeks = initializeWeeksArray(weeksInSeason)
  // Until I can find the most descriptive name possible, this mapOfTeams holds a seperate map for each team to keep track of who they are already scheduled to play in a season
  const mapOfTeams = createMapOfTeams(teams)

  for (let i = 0; i < weeksInSeason; i++) {
    teams.forEach((team) => {
      const currentTeamsScheduledOpponents = mapOfTeams.get(team.teamId)

      // Checks if the current team is equal to the team at index i and moves on to the next team so that they dont schedule themselves
      if (team.teamId === teams[i].teamId) {
        return
      }

      // Moves on if the currently selected team already plays this week so no team plays more than once per week
      if (teamPlaysThisWeek(team.teamId, weeks[i])) {
        return
      }

      // If the team at index i meets any of the following conditions then we need to enter a loop to find the next valid team
      if (currentTeamsScheduledOpponents.has(teams[i].teamId) || teamPlaysThisWeek(teams[i].teamId, weeks[i]) || currentTeamAppearsOnOtherTeamsSchedule(mapOfTeams.get(teams[i].teamId), team.teamId)) {
        let q = 0
        // This loop will go over each team so that we can find the next valid matchup
        while (q < weeksInSeason) {
          if (currentTeamsScheduledOpponents.has(teams[q].teamId) || teamPlaysThisWeek(team.teamId, weeks[i]) || teamPlaysThisWeek(teams[q].teamId, weeks[i]) || currentTeamAppearsOnOtherTeamsSchedule(mapOfTeams.get(teams[q].teamId), team.teamId) || team.teamId === teams[q].teamId) {
            q++
            continue
          } else {
            const otherTeamsMap = mapOfTeams.get(teams[q].teamId)
            otherTeamsMap.set(team.teamId, team)
            leagueSchedule[i].racesThisWeek.push(createRace(team, teams[q], i + 1))
            currentTeamsScheduledOpponents.set(teams[q].teamId, teams[q])
            weeks[i].push(team)
            weeks[i].push(teams[q])
            break
          }
        }
      } else {
        const otherTeamsMap = mapOfTeams.get(teams[i].teamId)
        leagueSchedule[i].racesThisWeek.push(createRace(team, teams[i], i + 1))
        otherTeamsMap.set(team.teamId, team)
        currentTeamsScheduledOpponents.set(teams[i].teamId, teams[i])
        weeks[i].push(team)
        weeks[i].push(teams[i])
      }
    })
  }

  return leagueSchedule
}

const createRace = (team1, team2, week) => {
  return {
    week: week,
    team1: team1,
    team2: team2
  }
}

/* const checkTimesTeamPlays = (schedule, teams) => {
	teams.forEach((team) => {
		console.log('team', team);
		console.log(schedule.filter((race) => race.team1.teamId === team.teamId || race.team2.teamId === team.teamId));
	});
}; */

const currentTeamAppearsOnOtherTeamsSchedule = (otherMap, currentTeamId) => {
  return !!otherMap.has(currentTeamId)
}

const teamPlaysThisWeek = (teamId, week) => {
  if (week.filter((team) => team.teamId === teamId).length > 0) {
    return true
  } else {
    return false
  }
}

const createMapOfTeams = (teams) => {
  const map = new Map()
  teams.forEach((team) => {
    map.set(team.teamId, new Map())
  })

  return map
}

const initializeLeagueSchedule = (weeksInSeason) => {
  const schedule = []

  for (let i = 0; i < weeksInSeason; i++) {
    schedule.push({ weekNumber: i + 1, racesThisWeek: [] })
  }

  return schedule
}

const initializeWeeksArray = (weeksInSeason) => {
  const weeks = []

  for (let i = 0; i < weeksInSeason; i++) {
    weeks.push([])
  }

  return weeks
}

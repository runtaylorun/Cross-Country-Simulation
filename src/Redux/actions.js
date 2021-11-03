import { SET_LEAGUE_NAME, SET_TEAM, SET_ROSTER, SET_TEAMS } from './actionTypes'


export const setLeagueName = (leagueName) => {
	return {
		type: SET_LEAGUE_NAME,
		payload: {leagueName}
	}
}

export const setUserTeam = (team) => {
	return {
		type: SET_TEAM,
		payload: {team}
	}
}

export const setRoster = (roster) => {
	return {
		type: SET_ROSTER,
		payload: {roster}
	}
}

export const setTeams = (teams) => {
	return {
		type: SET_TEAMS,
		payload: {teams}
	}
}
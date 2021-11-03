import {SET_LEAGUE_NAME, SET_TEAMS} from '../actionTypes'
const initialState = {
	leagueName: '',
	teams: []
}

const leagueReducer = (state = initialState, action) => {
	switch(action.type) {
	case SET_LEAGUE_NAME:
		return {
			...state,
			leagueName: action.payload.leagueName,
		}
	case SET_TEAMS:
		return {
			...state,
			teams: action.payload.teams
		}
	default:
		return state

	}
}

export default leagueReducer
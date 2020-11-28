import {  SET_TEAM, SET_ROSTER } from '../actionTypes'

const initialState = {
	team: {},
	roster: []
}

const teamReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_TEAM:
		return {
			...state,
			team: action.payload.team
		}
	case SET_ROSTER:
		return {
			...state,
			roster: action.payload.roster
		}
	default:
		return state
	}
}

export default teamReducer

import  teamReducer  from './team'
import leagueReducer from './league'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({teamReducer, leagueReducer})

export default rootReducer

import user from './user';
import league from './league'
import team from './team'
import season from './season'
import { combineReducers } from 'redux';

const appReducer = combineReducers({ user, league, team, season })

const rootReducer = (state, action) => {
    if (action.type === 'user/reset') {
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}

export default rootReducer

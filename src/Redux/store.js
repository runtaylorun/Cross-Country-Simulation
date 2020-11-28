import { createStore } from 'redux'
import rootReducer from './Reducers/root'
import {loadState, saveState} from './localstorage'

const persistedState = loadState()

export const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
	const state = store.getState()

	saveState({
		teamReducer: state.teamReducer,
		leagueReducer: state.leagueReducer
	})
})

import { configureStore } from '@reduxjs/toolkit'
import { loadState, saveState } from './localstorage'
import rootReducer from './slices/root';

const persistedState = loadState()

const store = configureStore({ reducer: rootReducer, devTools: true, preloadedState: persistedState })

store.subscribe(() => {
	const state = store.getState()

	saveState({
		team: state.team,
		league: state.league,
		user: state.user
	})
})

export default store






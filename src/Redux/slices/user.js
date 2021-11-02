import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		userTeamId: 0
	},
	reducers: {
		setUserId: (state, action) => {
			state.userTeamId = action.payload
		}
	}
})

export const { setUserId } = userSlice.actions
export default userSlice.reducer

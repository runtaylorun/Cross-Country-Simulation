import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userTeamId: 0
    },
    reducers: {
        setUserId: (state, action) => {
            state.userTeamId = action.payload
        },
        reset: (state, action) => {}
    }
})

export const { setUserId, reset } = userSlice.actions
export default userSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        team: {},
        roster: []
    },
    reducers: {
        setTeam: (state, action) => {
            state.team = action.payload
        },
        setRoster: (state, action) => {
            state.roster = action.payload
        }
    }
})

export const { setTeam, setRoster } = teamSlice.actions
export default teamSlice.reducer

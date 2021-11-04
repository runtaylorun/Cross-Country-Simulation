import { createSlice } from '@reduxjs/toolkit'

const leagueSlice = createSlice({
    name: 'league',
    initialState: {
        leagueName: '',
        teams: [],
        schedule: [],
    },
    reducers: {
        setLeagueName: (state, action) => {
            state.leagueName = action.payload
        },
        setTeams: (state, action) => {
            state.teams = action.payload
        },
        setSchedule: (state, action) => {
            state.schedule = action.payload
        }
    }
})

export const { setLeagueName, setTeams, setSchedule, setWeek } = leagueSlice.actions
export default leagueSlice.reducer
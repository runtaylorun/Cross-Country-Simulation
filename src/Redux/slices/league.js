import { createSlice } from '@reduxjs/toolkit'

const leagueSlice = createSlice({
  name: 'league',
  initialState: {
    leagueName: '',
    teams: [],
    schedule: [],
    initialized: false
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
    },
    setLeagueInitialized: (state) => {
      state.initialized = true
    }
  }
})

export const { setLeagueName, setTeams, setSchedule, setWeek, setLeagueInitialized } = leagueSlice.actions
export default leagueSlice.reducer

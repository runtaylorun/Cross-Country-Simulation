import { createSlice } from '@reduxjs/toolkit'

const seasonSlice = createSlice({
    name: 'season',
    initialState: {
        year: 2020,
        week: 1
    },
    reducers: {
        setWeek: (state, action) => {
            state.week = action.payload
        },
        setYear: (state, action) => {
            state.year = action.payload
        },
        incrementWeek: (state) => {
            state.week += 1
        },
        incrementYear: (state) => {
            state.year += 1
        }
    }
})

export const { setWeek, setYear, incrementWeek, incrementYear } = seasonSlice.actions
export default seasonSlice.reducer
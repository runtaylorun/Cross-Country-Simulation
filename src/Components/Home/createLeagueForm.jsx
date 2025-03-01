import React, { useState, useEffect } from 'react'
import { createLeagueDatabase } from '../../Scripts/IndexedDb/leagueServices'
import { Navigate, Link } from 'react-router-dom'
import Teams from '../../Data/teams.json'
import classes from '../../CSS/createForm.module.css'

const CreateLeagueForm = () => {
    const [leagueName, setLeagueName] = useState('')
    const [isLeagueCreated, setIsLeagueCreated] = useState(false)
    const [teams, setTeams] = useState([])
    const [selectedTeam, setSelectedTeam] = useState()

    useEffect(() => {
        setTeams([...Teams.Teams])
    }, [])

    const handleChange = (e) => {
        setLeagueName(e.target.value)
    }

    const handleTeamChange = (e) => {
        setSelectedTeam(teams[e.target.value - 1])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const league = {
            leagueName,
            selectedTeam: selectedTeam ?? teams[0]
        }

        const response = await createLeagueDatabase(league)

        response === 'Success'
            ? setIsLeagueCreated(true)
            : console.log('error creating league')
    }

    if (isLeagueCreated) return <Navigate to="/" />

    return (
        <div className={classes.center}>
            <h1>Create New League</h1>
            <form
                className={classes.container}
                onSubmit={(e) => handleSubmit(e)}
            >
                <div>
                    <label className={classes.label}>League Name</label>
                    <input
                        className={classes.textBox}
                        type="text"
                        onChange={(e) => handleChange(e)}
                    ></input>
                </div>
                <div>
                    <label className={classes.label}>Select a Team</label>
                    <select
                        className={classes.select}
                        onChange={(e) => handleTeamChange(e)}
                    >
                        {teams.map((team) => (
                            <option key={team.teamId} value={team.teamId}>
                                {team.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button className={classes.button} type="submit">
                        Create
                    </button>
                    <button type="reset" className={classes.button}>
                        Clear
                    </button>
                </div>
            </form>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default CreateLeagueForm

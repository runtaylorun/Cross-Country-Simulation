import React from 'react'
import { useSelector } from 'react-redux'
import { getTeams } from '../../Redux/selectors'

const Standings = () => {
    const teams = useSelector(getTeams)

    return (
        <div>
            <ul>
                {teams.map((team) => (
                    <li key={team.teamId}>{team.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Standings

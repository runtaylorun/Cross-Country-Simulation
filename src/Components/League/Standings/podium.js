import React from 'react'
import PropTypes from 'prop-types'

const Podium = ({ teams }) => {
  const top3 = teams.filter((team, index) => index <= 2)
  console.log({ top3 })
  const bottom = teams.filter((team, index) => index > 2)
  return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex' }}>
            {top3.map((team, index) => {
              if (index === 0) {
                return <div key={team.name} style={{ backgroundColor: 'gold', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 200, margin: 5 }}><h2>{`1.) ${team.name}`}</h2><p>{`${team.wins}-${team.losses}`}</p></div>
              }

              if (index === 1) {
                return <div key={team.name} style={{ backgroundColor: 'silver', display: 'flex', flexDirection: 'column', width: 200, margin: 5, alignItems: 'center' }}><h2>{`2.) ${team.name}`}</h2><p>{`${team.wins}-${team.losses}`}</p></div>
              }

              return <div key={team.name} style={{ backgroundColor: '#b08D57', display: 'flex', flexDirection: 'column', width: 200, margin: 5, alignItems: 'center' }}><h2>{`3.) ${team.name}`}</h2><p>{`${team.wins}-${team.losses}`}</p></div>
            })}
            </div>

            {bottom.map((team, index) => <div style={{ width: '100%', margin: 10 }} key={team.name}>{`${index + 4}.) ${team.name} ${team.wins}-${team.losses}`}</div>)}
        </div>
  )
}

Podium.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object)
}

export default Podium

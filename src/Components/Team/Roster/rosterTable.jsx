import PropTypes from 'prop-types'

const Roster = ({ roster }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Overall</th>
                    <th>Endurance</th>
                    <th>Speed</th>
                    <th>Hills</th>
                    <th>Durability</th>
                </tr>
            </thead>
            <tbody>
                {roster.map((runner, index) => (
                    <tr key={index}>
                        <td>{runner.name}</td>
                        <td>{runner.grade}</td>
                        <td>{runner.overall}</td>
                        <td>{runner.endurance}</td>
                        <td>{runner.speed}</td>
                        <td>{runner.hills}</td>
                        <td>{runner.durability}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

Roster.propTypes = {
    roster: PropTypes.arrayOf(PropTypes.object)
}

export default Roster

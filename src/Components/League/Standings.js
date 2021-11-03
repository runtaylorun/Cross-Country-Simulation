import React from 'react'
import { useSelector } from 'react-redux'
import { getTeams } from '../../Redux/selectors'

const Standings = (props) => {
	const [teams, setTeams] = useState([]);
	const { leagueName } = props.match.params;

	useEffect(() => {
		const getTeams = async () => {
			const response = await GetTeams(leagueName);

			setTeams([...response])
		};

		getTeams();
	}, [leagueName]);

	return (
		<div>
			<ul>
				{teams.map(team => <li key={team.teamId}>{team.name}</li>)}
			</ul>
		</div>
	)
}

export default Standings

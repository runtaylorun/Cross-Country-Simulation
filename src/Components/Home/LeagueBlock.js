import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../CSS/Home/Home.module.css';

let LeagueBlock = ({ leagueName, deleteLeague }) => {
	return (
		<div style={{ backgroundColor: 'white' }} className={styles.block}>
			<h1>{leagueName}</h1>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<button style={{ flexGrow: '1', width: '50%', margin: '20px' }}>
					<Link to={`/league/${leagueName}`}>Play</Link>
				</button>
				<button style={{ flexGrow: '1', width: '50%', margin: '20px' }}>
					<Link onClick={() => deleteLeague(leagueName)}>Delete</Link>
				</button>
			</div>
		</div>
	);
};

export default LeagueBlock;

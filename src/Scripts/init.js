import Names from '../Data/Names.json';
import Player from './Player/player';
import GenerateOverall from './Player/RatingGeneration';
import Teams from '../Data/Teams.json';

const GenerateRoster = () => {
	let roster = [];
	for (let i = 0; i < 10; i++) {
		let randomFirstName = Names.First[GenerateRandomNumber(Names.First.length)];
		let randomLastName = Names.Last[GenerateRandomNumber(Names.Last.length)];

		let combinedName = randomFirstName.concat(' ', randomLastName);

		let generatedPlayer = new Player(combinedName);

		generatedPlayer.overall = GenerateOverall(generatedPlayer);

		roster.push(generatedPlayer);
	}

	return roster;
};

const GenerateTeams = () => { };

const AddRosterToDatabase = (roster) => {
	let openRequest = indexedDB.open('User');

	openRequest.onsuccess = (event) => {
		let db = event.target.result;

		let transaction = db.transaction('Roster', 'readwrite');
		let store = transaction.objectStore('Roster');

		roster.forEach(runner => store.add(runner));

		return transaction.complete;
	};
};

const GenerateRandomNumber = (maxNum) => {
	const max = maxNum - 1;
	const min = 0;

	return Math.floor(Math.random() * (max - min) + min);
};

export default { GenerateRoster, GenerateRandomNumber };

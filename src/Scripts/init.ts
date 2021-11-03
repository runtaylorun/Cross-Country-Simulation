import Names from '../Data/Names.json'
import Player from './Player/player'
import GenerateOverall from './Player/RatingGeneration'
//import Teams from '../Data/Teams.json'
import { Roster, Player as IPlayer } from '../interfaces'
import {GenerateRandomNumber} from './lib/util'

const GenerateRoster = (): Roster => {
	const roster: Roster = []
	for (let i = 0; i < 10; i++) {
		const randomFirstName: string = Names.First[GenerateRandomNumber(0, Names.First.length)]
		const randomLastName: string = Names.Last[GenerateRandomNumber(0, Names.Last.length)]
		const combinedName: string = randomFirstName.concat(' ', randomLastName)

		const generatedPlayer: IPlayer = new Player(combinedName)

		generatedPlayer.overall = GenerateOverall(generatedPlayer)

		roster.push(generatedPlayer)
	}

	return roster
}

/* const AddRosterToDatabase = (roster) => {
	const openRequest = indexedDB.open('User')

	openRequest.onsuccess = (event) => {
		const db = event.target.result

		const transaction = db.transaction('Roster', 'readwrite')
		const store = transaction.objectStore('Roster')

		roster.forEach((runner) => store.add(runner))

		return transaction.complete
	}
} */



export default { GenerateRoster, GenerateRandomNumber }

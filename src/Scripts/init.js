import Names from '../Data/names.json'
import Player from './Player/player'
import GenerateOverall from './Player/ratingGeneration'
import { GenerateRandomNumber } from './lib/util'

const GenerateRoster = () => {
    const roster = []
    for (let i = 0; i < 10; i++) {
        const randomFirstName =
            Names.First[GenerateRandomNumber(0, Names.First.length)]
        const randomLastName =
            Names.Last[GenerateRandomNumber(0, Names.Last.length)]
        const combinedName = randomFirstName.concat(' ', randomLastName)

        const generatedPlayer = new Player(combinedName)

        generatedPlayer.overall = GenerateOverall(generatedPlayer)

        roster.push(generatedPlayer)
    }

    return roster
}

export default { GenerateRoster }

import { incrementSeasonWeek } from '../indexedDb/seasonServices'

export const simulateWeek = async (leagueName) => {
  await incrementSeasonWeek(leagueName)
}

export default simulateWeek

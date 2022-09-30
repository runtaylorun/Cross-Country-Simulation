import { incrementSeasonWeek } from '../indexedDb/seasonServices'

export const simulateWeek = async (leagueName) => {
  const newWeek = await incrementSeasonWeek(leagueName)

  return newWeek
}

export default simulateWeek

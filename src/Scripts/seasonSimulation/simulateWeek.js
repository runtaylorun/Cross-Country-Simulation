import { incrementSeasonWeek } from '../IndexedDb/SeasonServices';

export const simulateWeek = async (leagueName) => {
	await incrementSeasonWeek(leagueName);
};

export default simulateWeek;

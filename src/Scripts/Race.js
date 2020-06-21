import { getRosterById } from '../Scripts/IndexedDb/PlayerServices';
import { getCourseByTeamId } from '../Scripts/IndexedDb/courseServices';
import moment from 'moment';
import Chance from 'chance';

export const simulateRace = async (leagueName) => {
	const chance = new Chance();
	const team1 = await getRosterById(leagueName, 1);
	const team2 = await getRosterById(leagueName, 2);
	const course = await getCourseByTeamId(leagueName, 1);

	initializeRunners(team1, team2);

	course.terrain.forEach((terrain) => {
		team1.forEach((runner) => {
			runner.time += tick(terrain, runner, chance);
		});
		team2.forEach((runner) => {
			runner.time += tick(terrain, runner, chance);
		});
	});

	const results = [...team1, ...team2];

	results.sort((runner1, runner2) => {
		return runner1.time - runner2.time;
	});

	team1.forEach((runner) => formatTime(runner));
	team2.forEach((runner) => formatTime(runner));
	console.log(results);

	//const results = [...team1, ...team2];
	//results.sort((runner) => runner.time)

	/* let tiime = 0;
	for (let i = 0; i < 1000; i++) {
		tiime += team1[0].endurance * 10 * chance.floating({ min: 0.15, max: 0.2 });
	}
	console.log(tiime / 1000); */
};

const initializeRunners = (team1, team2) => {
	team1.forEach((runner) => {
		runner.time = 0;
		runner.place = 0;
	});

	team2.forEach((runner) => {
		runner.time = 0;
		runner.place = 0;
	});
};

const formatTime = (runner) => {
	const time = new Date(0);
	time.setSeconds(runner.time);
	runner.time = time.toISOString().substr(14, 5);
};

const tick = (terrain, runner, chance) => {
	switch (terrain) {
		case 'Flat':
			return runner.endurance * 10 * chance.floating({ min: 0.17, max: 0.2 });
		case 'Hilly':
			return runner.hills * 10 * chance.floating({ min: 0.3, max: 0.32 });
		case 'Rolling Hills':
			return runner.hills * 10 * chance.floating({ min: 0.3, max: 0.32 });
		default:
			return runner.endurance * 10 * chance.floating({ min: 0.17, max: 0.2 });
	}
};

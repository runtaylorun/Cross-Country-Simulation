import Initialize from '../init';
import Teams from '../../Data/Teams.json';
import { generateSchedule } from '../Schedule/generateSchedule';
import Courses from '../../Data/Courses.json';

export const createLeagueDatabase = (league) => {
	return new Promise((resolve, reject) => {
		let openRequest = indexedDB.open(`${league.leagueName}`, 1);

		openRequest.onupgradeneeded = () => {
			let db = openRequest.result;

			db.createObjectStore('Runners', { autoIncrement: true });
			db.createObjectStore('Teams', { keyPath: 'teamId' });
			db.createObjectStore('Courses', { keyPath: 'courseId' });
			db.createObjectStore('Season', { autoIncrement: true });
			db.createObjectStore('Schedule', { keyPath: 'weekNumber' });
			db.createObjectStore('User', { autoIncrement: true });
		};

		openRequest.onsuccess = (event) => {
			let db = event.target.result;

			let teamTransaction = db.transaction('Teams', 'readwrite');
			let teamStore = teamTransaction.objectStore('Teams');

			Teams.Teams.forEach((team) => teamStore.add(team));

			let courseTransaction = db.transaction('Courses', 'readwrite');
			let courseStore = courseTransaction.objectStore('Courses');

			Courses.Courses.forEach((course) => courseStore.add(course));

			let seasonTransaction = db.transaction('Season', 'readwrite');
			let seasonStore = seasonTransaction.objectStore('Season');

			seasonStore.add({
				year: '2010',
				weeksLeft: '8',
				currentWeek: '1'
			})

			let userTransaction = db.transaction('User', 'readwrite');
			let userStore = userTransaction.objectStore('User');

			userStore.add({ ...league.selectedTeam });

			const schedule = generateSchedule(Teams.Teams, 8);

			let scheduleTransaction = db.transaction('Schedule', 'readwrite');
			let scheduleStore = scheduleTransaction.objectStore('Schedule');
			schedule.forEach((week) => {
				scheduleStore.add(week);
			});

			let runnerTransaction = db.transaction('Runners', 'readwrite');
			let runnerStore = runnerTransaction.objectStore('Runners');
			Teams.Teams.forEach((team) => {
				let roster = Initialize.GenerateRoster();

				roster.forEach((runner) => {
					runner.teamId = team.teamId;
					runnerStore.add(runner);
				});
			});

			return runnerTransaction.complete;
		};

		openRequest.onerror = () => {
			console.log('There was an error with the indexedDb database');
		};

		resolve('Success');
	});
};

export const deleteLeagueDatabase = (leagueName) => {
	return new Promise((resolve, reject) => {
		let request = indexedDB.deleteDatabase(leagueName);

		request.onsuccess = () => {
			console.log('Database Successfully deleted');
		};

		request.onerror = () => {
			console.log('Could not delete the database');
		};

		resolve('Deleted');
	});
};

export default createLeagueDatabase;

export const getCourseByTeamId = (leagueName, teamId) => {
	return new Promise((resolve, reject) => {
		let openRequest = indexedDB.open(leagueName);

		openRequest.onsuccess = (event) => {
			let db = event.target.result;

			let transaction = db.transaction('Courses', 'readwrite');

			let objectStore = transaction.objectStore('Courses');

			let objectStoreRequest = objectStore.getAll();

			objectStoreRequest.onsuccess = (event) => {
				let course = objectStoreRequest.result.filter(
					(course) => course.courseId === teamId
				);
				resolve(course[0]);
			};
		};
	});
};

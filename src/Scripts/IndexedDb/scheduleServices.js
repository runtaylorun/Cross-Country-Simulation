export const getSchedule = (leagueName) => {
	return new Promise((resolve, reject) => {
		let openRequest = indexedDB.open(leagueName);
		console.log('schedule request');

		openRequest.onsuccess = (event) => {
			let db = event.target.result;
			console.log(db);

			let transaction = db.transaction('Schedule', 'readwrite');

			let objectStore = transaction.objectStore('Schedule');

			let objectStoreRequest = objectStore.getAll();

			objectStoreRequest.onsuccess = (event) => {
				let schedule = objectStoreRequest.result;
				resolve([...schedule]);
			};
		};
	});
};

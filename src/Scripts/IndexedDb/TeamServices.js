export const GetTeams = (leagueName) => {
	return new Promise((resolve, reject) => {
		let openRequest = indexedDB.open(leagueName);

		openRequest.onsuccess = (event) => {
			let db = event.target.result;

			let transaction = db.transaction('Teams', 'readwrite');

			let objectStore = transaction.objectStore('Teams');

			let objectStoreRequest = objectStore.getAll();

			objectStoreRequest.onsuccess = (event) => {
				let teams = objectStoreRequest.result;
				resolve(teams);
			};
		};
	});
};

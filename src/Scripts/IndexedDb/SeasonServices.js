export const getSeasonInfo = (leagueName) => {
    return new Promise((resolve, reject) => {
		let openRequest = indexedDB.open(leagueName);

		openRequest.onsuccess = (event) => {
			let db = event.target.result;

			let transaction = db.transaction('Season', 'readwrite');

			let objectStore = transaction.objectStore('Season');

			let objectStoreRequest = objectStore.get(1);

			objectStoreRequest.onsuccess = (event) => {
				let season = objectStoreRequest.result;
				resolve(season)
			};
		};
	});
}

export default getSeasonInfo
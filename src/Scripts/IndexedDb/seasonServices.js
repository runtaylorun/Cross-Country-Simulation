export const getWeek = (leagueName) => {
	return new Promise((resolve, reject) => {
		const openRequest = indexedDB.open(leagueName)

		openRequest.onsuccess = (event) => {
			const db = event.target.result

			const transaction = db.transaction('Season', 'readwrite')

			const objectStore = transaction.objectStore('Season')

			const objectStoreRequest = objectStore.getAll()

			objectStoreRequest.onsuccess = (event) => {
				const season = objectStoreRequest.result.sort((a, b) => b.year - a.year)[0]
				resolve(season.week)
			}
		}
	})
}

export const getSeason = (leagueName) => {
	return new Promise((resolve, reject) => {
		let openRequest = indexedDB.open(leagueName)

		openRequest.onsuccess = (event) => {
			let db = event.target.result

			let transaction = db.transaction('Season', 'readwrite')

			let objectStore = transaction.objectStore('Season')

			let objectStoreRequest = objectStore.getAll()

			objectStoreRequest.onsuccess = (event) => {
				const season = objectStoreRequest.result[objectStoreRequest.result.length - 1]
				resolve(season)
			}
		}
	})
}
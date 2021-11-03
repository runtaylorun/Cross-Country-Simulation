const getWeek = (leagueName) => {
	return new Promise((resolve, reject) => {
		let openRequest = indexedDB.open(leagueName)

		openRequest.onsuccess = (event) => {
			let db = event.target.result

			let transaction = db.transaction('Season', 'readwrite')

			let objectStore = transaction.objectStore('Season')

			let objectStoreRequest = objectStore.getAll()

			objectStoreRequest.onsuccess = (event) => {
				let season = objectStoreRequest.result.find((season) => season.year === 2020)
				resolve(season.week)
			}
		}
	})
}
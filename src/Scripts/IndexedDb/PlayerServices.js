const getRosterById = (leagueName, teamId) => {
	return new Promise((resolve, reject) => {
		let openRequest = indexedDB.open(leagueName)

		openRequest.onsuccess = (event) => {
			let db = event.target.result

			let transaction = db.transaction('Runners', 'readwrite')

			let objectStore = transaction.objectStore('Runners')

			let objectStoreRequest = objectStore.getAll()

			objectStoreRequest.onsuccess = (event) => {
				let roster = objectStoreRequest.result.filter((runner) => runner.teamId === teamId)
				resolve(roster)
			}
		}
	})
}

export { getRosterById }

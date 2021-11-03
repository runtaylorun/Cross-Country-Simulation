export const getUserTeam = (leagueName) => {
	return new Promise((resolve, reject) => {
		let openRequest = indexedDB.open(leagueName)

		openRequest.onsuccess = (event) => {
			let db = event.target.result

			let transaction = db.transaction('User', 'readwrite')

			let objectStore = transaction.objectStore('User')

			let objectStoreRequest = objectStore.get(1)

			objectStoreRequest.onsuccess = (event) => {
				let userTeam = objectStoreRequest.result
				resolve(userTeam)
			}
		}
	})
}

export const getUserTeamId = (leagueName) => {
	return new Promise((resolve, reject) => {
		let openRequest = indexedDB.open(leagueName)

		openRequest.onsuccess = (event) => {
			let db = event.target.result

			let transaction = db.transaction('User', 'readwrite')

			let objectStore = transaction.objectStore('User')

			let objectStoreRequest = objectStore.get(1)

			objectStoreRequest.onsuccess = (event) => {
				let userTeam = objectStoreRequest.result
				resolve(userTeam.id)
			}
		}
	})
}

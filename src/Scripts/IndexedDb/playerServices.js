const getRosterById = (leagueName, teamId) => {
    return new Promise((resolve, reject) => {
        const openRequest = indexedDB.open(leagueName)

        openRequest.onsuccess = (event) => {
            const db = event.target.result

            const transaction = db.transaction('Runners', 'readwrite')

            const objectStore = transaction.objectStore('Runners')

            const objectStoreRequest = objectStore.getAll()

            objectStoreRequest.onsuccess = (event) => {
                const roster = objectStoreRequest.result.filter(
                    (runner) => runner.teamId === teamId
                )
                resolve(roster)
            }
        }
    })
}

export { getRosterById }

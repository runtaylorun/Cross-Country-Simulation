export const getTeams = (leagueName) => {
    return new Promise((resolve, reject) => {
        const openRequest = indexedDB.open(leagueName)

        openRequest.onsuccess = (event) => {
            const db = event.target.result

            const transaction = db.transaction('Teams', 'readwrite')

            const objectStore = transaction.objectStore('Teams')

            const objectStoreRequest = objectStore.getAll()

            objectStoreRequest.onsuccess = (event) => {
                resolve(objectStoreRequest.result)
            }
        }
    })
}

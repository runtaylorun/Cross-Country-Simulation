export const getUserTeam = (leagueName) => {
    return new Promise((resolve, reject) => {
        const openRequest = indexedDB.open(leagueName)

        openRequest.onsuccess = (event) => {
            const db = event.target.result

            const transaction = db.transaction('User', 'readwrite')

            const objectStore = transaction.objectStore('User')

            const objectStoreRequest = objectStore.get(1)

            objectStoreRequest.onsuccess = (event) => {
                resolve(objectStoreRequest.result)
            }
        }
    })
}

export const getUserTeamId = (leagueName) => {
    return new Promise((resolve, reject) => {
        const openRequest = indexedDB.open(leagueName)

        openRequest.onsuccess = (event) => {
            const db = event.target.result

            const transaction = db.transaction('User', 'readwrite')

            const objectStore = transaction.objectStore('User')

            const objectStoreRequest = objectStore.get(1)

            objectStoreRequest.onsuccess = (event) => {
                const userTeam = objectStoreRequest.result

                resolve(userTeam.id)
            }
        }
    })
}

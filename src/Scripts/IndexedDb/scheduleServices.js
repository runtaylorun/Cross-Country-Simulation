export const getSchedule = (leagueName) => {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open(leagueName)

    openRequest.onsuccess = (event) => {
      const db = event.target.result

      const transaction = db.transaction('Schedule', 'readwrite')

      const objectStore = transaction.objectStore('Schedule')

      const objectStoreRequest = objectStore.getAll()

      objectStoreRequest.onsuccess = (event) => {
        const schedule = objectStoreRequest.result
        resolve([...schedule])
      }
    }
  })
}

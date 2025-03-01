export const getSeasonInfo = (leagueName) => {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open(leagueName)

    openRequest.onsuccess = (event) => {
      const db = event.target.result

      const transaction = db.transaction('Season', 'readwrite')

      const objectStore = transaction.objectStore('Season')

      const objectStoreRequest = objectStore.get(1)

      objectStoreRequest.onsuccess = (event) => {
        const season = objectStoreRequest.result
        resolve(season)
      }
    }
  })
}

export const incrementSeasonWeek = (leagueName) => {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open(leagueName)

    openRequest.onsuccess = (event) => {
      const db = event.target.result

      const transaction = db.transaction('Season', 'readwrite')

      const objectStore = transaction.objectStore('Season')

      const objectStoreRequest = objectStore.get(1)

      objectStoreRequest.onsuccess = (event) => {
        const season = objectStoreRequest.result

        season.weeksLeft -= 1
        season.currentWeek += 1

        const updateSeasonRequest = objectStore.put(season, 1)

        updateSeasonRequest.onsuccess = () => {
          resolve('Week added')
        }
      }
    }
  })
}

export default getSeasonInfo

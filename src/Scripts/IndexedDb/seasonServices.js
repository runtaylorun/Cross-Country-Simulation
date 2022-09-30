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
    const openRequest = indexedDB.open(leagueName)

    openRequest.onsuccess = (event) => {
      const db = event.target.result

      const transaction = db.transaction('Season', 'readwrite')

      const objectStore = transaction.objectStore('Season')

      const objectStoreRequest = objectStore.getAll()

      objectStoreRequest.onsuccess = (event) => {
        const season = objectStoreRequest.result[objectStoreRequest.result.length - 1]
        resolve(season)
      }
    }
  })
}

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

      const objectStoreRequest = objectStore.get(2020)

      objectStoreRequest.onsuccess = (event) => {
        const season = objectStoreRequest.result

        season.week += 1

        console.log(season)

        const updateSeasonRequest = objectStore.put(season)

        updateSeasonRequest.onsuccess = () => {
          resolve(season.week)
        }
      }
    }
  })
}

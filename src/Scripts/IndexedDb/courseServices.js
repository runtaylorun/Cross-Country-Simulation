export const getCourseByTeamId = (leagueName, teamId) => {
    return new Promise((resolve, reject) => {
        const openRequest = indexedDB.open(leagueName)

        openRequest.onsuccess = (event) => {
            const db = event.target.result

            const transaction = db.transaction('Courses', 'readwrite')

            const objectStore = transaction.objectStore('Courses')

            const objectStoreRequest = objectStore.getAll()

            objectStoreRequest.onsuccess = (event) => {
                const course = objectStoreRequest.result.find(
                    (course) => course.courseId === teamId
                )

                resolve(course)
            }
        }
    })
}

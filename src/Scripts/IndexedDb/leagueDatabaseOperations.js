import Initialize from '../init'
import Teams from '../../Data/Teams.json'
import { generateSchedule } from '../Schedule/generateSchedule'
import Courses from '../../Data/Courses.json'

export const createLeagueDatabase = (league) => {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open(`${league.leagueName}`, 1)

    openRequest.onupgradeneeded = () => {
      const db = openRequest.result

      db.createObjectStore('Runners', { autoIncrement: true })
      db.createObjectStore('Teams', { keyPath: 'teamId' })
      db.createObjectStore('Courses', { keyPath: 'courseId' })
      db.createObjectStore('Season', { autoIncrement: true })
      db.createObjectStore('Schedule', { keyPath: 'weekNumber' })
      db.createObjectStore('User', { autoIncrement: true })
    }

    openRequest.onsuccess = (event) => {
      const db = event.target.result

      const teamTransaction = db.transaction('Teams', 'readwrite')
      const teamStore = teamTransaction.objectStore('Teams')

      Teams.Teams.forEach((team) => teamStore.add(team))

      const courseTransaction = db.transaction('Courses', 'readwrite')
      const courseStore = courseTransaction.objectStore('Courses')

      Courses.Courses.forEach((course) => courseStore.add(course))

      const seasonTransaction = db.transaction('Season', 'readwrite')
      const seasonStore = seasonTransaction.objectStore('Season')

      seasonStore.add({
        year: '2010',
        weeksLeft: 8,
        currentWeek: 1
      })

      const userTransaction = db.transaction('User', 'readwrite')
      const userStore = userTransaction.objectStore('User')

      userStore.add({ ...league.selectedTeam })

      const schedule = generateSchedule(Teams.Teams, 7)

      const scheduleTransaction = db.transaction('Schedule', 'readwrite')
      const scheduleStore = scheduleTransaction.objectStore('Schedule')
      schedule.forEach((week) => {
        scheduleStore.add(week)
      })

      const runnerTransaction = db.transaction('Runners', 'readwrite')
      const runnerStore = runnerTransaction.objectStore('Runners')
      Teams.Teams.forEach((team) => {
        const roster = Initialize.GenerateRoster()

        roster.forEach((runner) => {
          runner.teamId = team.teamId
          runnerStore.add(runner)
        })
      })

      return runnerTransaction.complete
    }

    openRequest.onerror = () => {
      console.log('There was an error with the indexedDb database')
    }

    resolve('Success')
  })
}

export const deleteLeagueDatabase = (leagueName) => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.deleteDatabase(leagueName)

    request.onsuccess = () => {
      console.log('Database Successfully deleted')
    }

    request.onerror = () => {
      console.log('Could not delete the database')
    }

    resolve('Deleted')
  })
}

export default createLeagueDatabase

import { generateSchedule } from './generateSchedule'

describe('Tests for generateSchedule', () => {
    const teams = [
        {
            teamId: 1,
            name: 'Southern Indiana',
            coach: 'Mike Hillyard'
        },
        {
            teamId: 2,
            name: 'Indianapolis',
            coach: 'Jeff Gundy'
        },
        {
            teamId: 3,
            name: 'Bellarmine',
            coach: 'Chase Broughton'
        },
        {
            teamId: 4,
            name: 'Southwest Baptist',
            coach: 'Rick Fox'
        },
        {
            teamId: 5,
            name: 'Lewis',
            coach: 'Roger Carlson'
        },
        {
            teamId: 6,
            name: 'Drury',
            coach: 'Spencer Willis'
        },
        {
            teamId: 7,
            name: 'Illinois Springfield',
            coach: 'Tyler Pence'
        },
        {
            teamId: 8,
            name: 'Truman State',
            coach: 'Eric Hoffland'
        }
    ]
    const weeksInSeason = 7

    test('Given an even amount of valid teams, generate a valid schedule', () => {
        const expectedRacesPerWeek = teams.length / 2
        const schedule = generateSchedule(teams, weeksInSeason)

        console.log(schedule)

        const finalWeek = schedule[schedule.length - 1].weekNumber

        expect(finalWeek).toBe(weeksInSeason)

        schedule.forEach((week) => {
            expect(week.racesThisWeek.length).toBe(expectedRacesPerWeek)
        })

        // Each team only plays once per week
        schedule.forEach((week) => {
            const uniqueTeamsRacedThisWeek = new Map()
            week.racesThisWeek.forEach((race) => {
                expect(
                    uniqueTeamsRacedThisWeek.get(race.team1.teamId)
                ).toBeFalsy()
                expect(
                    uniqueTeamsRacedThisWeek.get(race.team2.teamId)
                ).toBeFalsy()

                uniqueTeamsRacedThisWeek.set(race.team1.teamId, true)
                uniqueTeamsRacedThisWeek.set(race.team2.teamId, true)
            })
        })

        // Each team does not play another team more than once per season
        teams.forEach((team) => {
            const teamsPlayedThisSeason = new Map()
            schedule.forEach((week) => {
                const thisTeamsRace = week.racesThisWeek.find(
                    (race) =>
                        race.team1.teamId === team.teamId ||
                        race.team2.teamId === team.teamId
                )

                const opponent =
                    thisTeamsRace.team1.teamId === team.teamId
                        ? thisTeamsRace.team2
                        : thisTeamsRace.team1

                expect(teamsPlayedThisSeason.get(opponent.teamId)).toBeFalsy()

                teamsPlayedThisSeason.set(opponent.teamId, true)
            })
        })
    })
})

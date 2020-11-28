interface Player {
    name: string
    grade: number
    speed: number
    endurance: number
    hills: number
    durability: number
    overall: number
}

interface Team {
    teamId: number
    name: string
    coach: string
}

interface Race {
    week: number
    team1: Team
    team2: Team
}

interface weekOfSchedule {
    weekNumber: number
    racesThisWeek: Array<Race>
}

type Schedule = Array<weekOfSchedule>
type Roster = Array<Player>


export type { Player, Team, Schedule, weekOfSchedule, Roster, Race }
import {GenerateRandomNumber} from '../lib/util'

class Player {

    name: string
    grade: number
    speed: number
    endurance: number
    hills: number
    durability: number
    overall: number

    constructor(name: string) {
    	this.name = name
    	this.grade =  9
    	this.speed = GenerateSpeed()
    	this.endurance = GenerateEndurance()
    	this.hills = GenerateHills()
    	this.durability = GenerateDurability()
    	this.overall = 0
    }
}

const GenerateSpeed = (): number => {
	return GenerateRandomNumber(15, 45)
	
}

const GenerateEndurance = (): number => {
	return GenerateRandomNumber(15, 45)
}

const GenerateHills = (): number => {
	return GenerateRandomNumber(15, 45)
}

const GenerateDurability = (): number => {
	return GenerateRandomNumber(50, 80)
}

export default Player
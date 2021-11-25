import { GenerateRandomNumber } from '../lib/util'

class Player {
  constructor (name) {
    this.name = name
    this.grade = 9
    this.speed = GenerateSpeed()
    this.endurance = GenerateEndurance()
    this.hills = GenerateHills()
    this.durability = GenerateDurability()
    this.overall = 0
  }
}

const GenerateSpeed = () => {
  return GenerateRandomNumber(15, 45)
}

const GenerateEndurance = () => {
  return GenerateRandomNumber(15, 45)
}

const GenerateHills = () => {
  return GenerateRandomNumber(15, 45)
}

const GenerateDurability = () => {
  return GenerateRandomNumber(50, 80)
}

export default Player

class Player {
    constructor(name) {
        this.name = name;
        this.grade = 9;
        this.speed = GenerateSpeed();
        this.endurance = GenerateEndurance();
        this.hills = GenerateHills();
        this.durability = GenerateDurability();
    }
}

let GenerateSpeed = () => {
    return 50;
}

let GenerateEndurance = () => {
    return 55;
}

let GenerateHills = () => {
    return 33;
}

let GenerateDurability = () => {
    return 75;
}

export default Player;
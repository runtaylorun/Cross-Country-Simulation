let GenerateOverall = (player) => {
    return Math.floor((player.speed + player.endurance + player.hills + (player.durability * .5)) / 4);
}

export default GenerateOverall;
const GenerateOverall = (player) => {
    return Math.floor(
        (player.speed +
            player.endurance +
            player.hills +
            player.durability * 0.5) /
            4
    )
}

export default GenerateOverall

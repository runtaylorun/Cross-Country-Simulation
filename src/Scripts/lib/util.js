const GenerateRandomNumber = (minNum, maxNum) => {
    const max = maxNum - 1
    const min = minNum

    return Math.floor(Math.random() * (max - min) + min)
}

const flipRating = (rating) => {
    if (rating > 50) {
        return (rating - 100) * -1
    } else {
        return 100 - rating
    }
}

const getLeagueNameFromURL = (path) => {
    const firstSlashIndex = path?.indexOf('/', 1) + 1
    const secondSlashIndex = path?.indexOf('/', firstSlashIndex)
    if (secondSlashIndex === -1) {
        return path?.substring(firstSlashIndex)
    } else {
        return path?.substring(firstSlashIndex, secondSlashIndex)
    }
}

export { GenerateRandomNumber, flipRating, getLeagueNameFromURL }

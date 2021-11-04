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

export { GenerateRandomNumber, flipRating }
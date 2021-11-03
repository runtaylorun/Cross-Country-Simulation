const GenerateRandomNumber = (minNum: number, maxNum: number): number => {
	const max: number = maxNum - 1
	const min: number = minNum

	return Math.floor(Math.random() * (max - min) + min)
}

const flipRating = (rating: number): number => {
	if (rating > 50) {
		return (rating - 100) * -1 
	} else {
		return 100 - rating
	}
}

export {GenerateRandomNumber, flipRating}
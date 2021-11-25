export const getLeagues = () => {
	return new Promise((resolve, reject) => {
		let resultArray = [];
		indexedDB.databases().then((results) => {
			resultArray.push(results);
			var leagueNames = resultArray[0];
			resolve(leagueNames);
		});
	});
};

export const getLeagueCount = () => {
	return new Promise((resolve, reject) => {
		let resultArray = [];

		indexedDB.databases().then((results) => {
			resultArray.push(results);
			resolve(resultArray.length);
		});
	});
};

export default getLeagues;

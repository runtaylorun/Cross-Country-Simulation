let GetLeagues =  () => {
    return new Promise((resolve, reject) => {
        let resultArray = []
        indexedDB.databases().then((results) => {
            resultArray.push(results)
            var leagueNames = resultArray[0]
            resolve(leagueNames)
        });
    })
}

export default GetLeagues;
const CreateLeagueDatabase = (leagueName) => {
    let openRequest = indexedDB.open(`${leagueName}`);

    openRequest.onupgradeneeded = () => {
        let db = openRequest.result;

        switch(db.version) {
            case 1:
                var leagueStore = db.createObjectStore("Runners",)
                break;
            default:
                break;
        }
    }

    openRequest.onerror = () => {
        console.log("There was an error with the indexedDb database")
    }
}

export default CreateLeagueDatabase;
const initializeRosterDb = () => {
    let openRequest = indexedDB.open('User');

    openRequest.onupgradeneeded = () => {
        let db = openRequest.result;

        switch(db.version) {
            case 1:
                var rosterStore = db.createObjectStore("Roster", {keyPath: "name"})

                rosterStore.createIndex("Name", "Name", {unique: false});
                rosterStore.createIndex("Grade", "Grade", {unique: false});
                rosterStore.createIndex("Overall", "Overall", {unique: false});
                rosterStore.createIndex("Speed", "Speed", {unique: false});
                rosterStore.createIndex("Endurance", "Endurance", {unique: false});
                rosterStore.createIndex("Hills", "Hills", {unique: false});
                rosterStore.createIndex("Durability", "Durability", {unique: false});
                console.log("Roster Object store created and indexes created.")
                break;
            default:
                break;
        }
    }

    openRequest.onerror = () => {
        console.log("There was an error with the indexedDb database")
    }
}

export default initializeRosterDb;
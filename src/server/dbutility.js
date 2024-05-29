const sqlite3 = require('sqlite3').verbose();

const database = new sqlite3.Database(__dirname + "/abbreviations.db", (err) => {
    if (err) return console.error(err);
})

function createTable() {
    database.run("CREATE TABLE abbreviations(name VARCHAR, full_name VARCHAR, description TEXT)");
}

function dropTable() {
    database.run("DROP TABLE abbreviations")
}

function insertValue(newname, newfullname, newdesc) {
    newValues = [`${newname}`, `${newfullname}`, `${newdesc}`]
    database.run("INSERT INTO abbreviations VALUES (?,?,?)", newValues);
}

async function selectAll() {
    return new Promise((resolve) => {
        database.all("SELECT * FROM abbreviations", [], (err,rows) => {
            if (err) return console.error(err);
            resolve(rows);
        });
    }) 
}

module.exports = {
    database,
    createTable,
    dropTable,
    insertValue,
    selectAll
}
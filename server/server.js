const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "tester00",
    password: "Grapefruit123!@#",
    database: "smartmediainterface",
});

//Gets all filenames in the data/DATA01/ folder
function fetchFiles(){
    db.connect();
    //db.query("SELECT * FROM 'RawFiles", ()=> {});
    db.end();
}

// Load the files into the db
// This may not be needed if I just hard-paste an 'ls' into workbench
function loadFiles(){
    db.connect();
    //db.query("SELECT * FROM 'RawFiles", ()=> {});
    db.end();

}

app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(3879, () => {
    console.log("Server started on port 3879.");
});

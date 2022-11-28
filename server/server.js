const express = require("express");
const app = express();
const mysql = require("mysql");
const { render } = require("vue");

const db = mysql.createConnection({
    host: "localhost",
    user: "tester00",
    password: "Grapefruit123!@#",
    database: "smartmediainterface",
});




//Gets all filenames in the data/DATA01/ folder
var entry = [];
function fetchFiles(){
    var r;
    console.log("fetchFiles");

    return new Promise(function(resolve, reject){
        db.query("SELECT * FROM `File`", function(err, rows){
            if(rows === undefined){
                reject(new Error("Error"+err));
            }else {
                //console.log(rows);
                resolve(rows);
                return(rows);
            }


        })



    })

    //for (const x of entry){
    //    console.log(x.value);
    //}


      //console.log('The solution is: ', results[0].id);
      //entry.add(id,          results[0].name);
      //entry.add(name,        results[0].filename);
      //entry.add(filename,    results[0].extension);
      //entry.add(extension,   results[0].type);
      //entry.add(type,        results[0].filesize);
      //entry.add(filesize,    results[0].create_time);
      //entry.add(create_time, results[0].latitude);
      //entry.add(latitude,    results[0].longitude);

}

// Load the files into the db
// This may not be needed if I just hard-paste an 'ls' into workbench


app.get("/api", (req, res) => {
    fetchFiles().then(function(results){
        //res = res.json(results);
        res.send(results);
    }).catch(function(err){
        console.log("Promise error"+err);
    })


    //for (const x of entry){
    //    console.log(x.value);
    //}


    //res.json(results);
    //res.json({ files: ["userOne", "userTwo", "userThree", "tomato"] });
});

app.listen(3879, () => {
    console.log("Server started on port 3879.");
});

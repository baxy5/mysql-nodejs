const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    //Creating Database
    /* con.query("CREATE DATABASE test CHARACTER SET utf8 COLLATE utf8_hungarian_ci", function(err,res){
        if(err) throw err;
        console.log("Database created!");
    }) */

    //Creating Table
    /* let testTable = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(testTable, function(err,res){
        if(err) throw err;
        console.log('Table created!');
    }) */

    //Insert into
    /* let insertTest = "INSERT INTO customers (name, address) VALUES ('Bakiker', 'Törtel 37')";
    con.query(insertTest, function(err,res){
        if(err) throw err;
        console.log('Inserted!');
    }) */

    //SELECT
    let selectTest = "SELECT * FROM customers";
    con.query(selectTest, function(err,result,fields){
        if(err) throw err;
        console.log(result);
    })


})


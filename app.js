const express   	= require("express");
let app         	= express();
const bodyParser  	= require("body-parser");


//setting up routes
const indexRoutes = require("./routes/index");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); //no need to add .ejs when locating ejs files
app.use(express.static(__dirname + "/public"));
//app.use(methodOverride("_method")); //this will be used in the froms request
app.use("/", indexRoutes);


const http = require('http');


/*
// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

*/


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started!");
 });
 

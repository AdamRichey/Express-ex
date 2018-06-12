//To Be Installed "npm install express" "npm install ejs"*****************


var express = require("express"); //importing our module from node

var app = express(); //creating an express app

var bodyParser = require('body-parser'); //node module to get request object from post data

app.use(express.static(__dirname + "/static")); //setting project to use our static folder

app.use(bodyParser.urlencoded({extended: true})); //setting project to use our body parser

app.set('views', __dirname + '/views');  //setting project to use views

app.set('view engine', 'ejs'); //telling our project to use ejs

app.get('/', function (request, response){
	response.render('main');
})//setting how to handle our route

app.get("/tiger", function (request, response){
    // setting our users up
    var users_array = [
        {Name: "Tiger", Speed: "75mph", Diet:"Carnivore", Length:"10ft"}, 
    ];
    response.render('details', {users: users_array});
})

app.get("/lion", function (request, response){
    // setting our users up
    var users_array = [
        {Name: "Lion", Speed: "50mph", Diet:"Carnivore", Length:"20ft"}, 
    ];
    response.render('details', {users: users_array});
})

app.get("/cheetah", function (request, response){
    // setting our users up
    var users_array = [
        {Name: "Cheetah", Speed: "90mph", Diet:"Carnivore", Length:"8ft"}, 
    ];
    response.render('details', {users: users_array});
})

app.listen(8000,function(){
	console.log("listening on 8000")
})//setting our ip address

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var john = require('./johnthevalidator.js');

var sql = mysql.createConnection({
  /*
  host: "localhost",
  user: "'jaj'",
  password: "alma",
  database: "caesar"
  */
});

var app = express();
app.use(bodyParser.json());
app.use(express.static('client'));

// app.get('/', function(req, res) {
//   res.sendfile('./client/index.html');
// });

app.post('/exam', function(req, res) {
  var feedback = req.body.feedback;
  var score = parseInt(req.body.score);
  var email = req.body.email;

  var response = {
    "status": "ok",
    "projects": [
      "secret project 1",
      "secret project 2"
    ]
  };

  var error = {
    "status": "error",
    "message": "thank you"
  };

  // NOTE: temporary
  var johnSais = john(feedback, score, email);

  if (johnSais === false) {
    res.status(400);
    res.send(error);
  } else {
    // SQL query
    res.send(response);
    // NOTE: Debug:
    // console.log('Response sent: ',response);
  };

});

console.log('Good day, Master! Server is up and running on localhost:3000. \nWaiting for your requests!')
app.listen(3000);

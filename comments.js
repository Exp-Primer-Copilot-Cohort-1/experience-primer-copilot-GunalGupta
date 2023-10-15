// Create web server and define routes
// 
// 1. Create web server
// 2. Define routes
// 3. Start server
// 
// 

// 1. Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Comment = require('./models/comment');

// 2. Define routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});


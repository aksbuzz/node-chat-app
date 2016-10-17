//This file handles the configuration of the app.
//It is required by app.js

var express = require('express');

module.exports = function(app, io) {

	//Set .html as default template extension
	app.set('view engine', 'html');

	//Initialize the ejs template engine
	app.engine('html', require('ejs').renderFile);

	//Tell express wherer it can find the templates
	app.set('views', __dirname + '/views');

	//Make the files in public folder available to all user
	app.use(express.static(__dirname + '/public'));

};
require('./api/data/db.js');
//déclarer express
var express = require('express');
//déclare app qui utilise express
var app = express();
var path = require('path');
//permet d'écrire dans le body du HTML
var bodyParser = require('body-parser');

var routes = require('./api/routes');

// défini le port d'écoute 3000
app.set('port', 3003);

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));

// Add some routing
app.use('/api', routes);

// Listen for requests défini le serveur
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

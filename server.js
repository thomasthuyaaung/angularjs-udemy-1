var express = require('express');
var serveIndex = require('serve-index')
var app = express();

//this will allow serving files in /bower_components at /bower_components
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use(express.static('public')); //this will allow serving files in /public at /
app.use('/public', express.static('public')); //this will allow serving files in /public at /public

// Directory Listing 
app.use('/', serveIndex('public', {'icons': true}))
//this will list all files in /public at the start of the page http://localhost:3000



// respond with "Hello World!" on the homepage
// app.get('/', function (req, res) {
//   res.send('<h1><a href="">Exercises</a></h1>');
// });


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
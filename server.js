var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require("body-parser");
var app  = express();

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/',function(req,res){
  res.sendfile("index.html");
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

/*app.get('/ui/madi.png', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});*/

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+email+", password is "+password);
  res.end("yes");
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

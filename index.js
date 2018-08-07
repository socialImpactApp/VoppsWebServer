const express = require('express')
const path = require('path')
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 5000
var connect = require("connect");

var app = connect().use(connect.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
//Return the index for any other GET request
app.get('/', function(req, res) {
  res.render('default.htm');
});
app.listen(5000);

//Look for statics first



express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

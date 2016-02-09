var express = require('express');
var handlebars = require('express-handlebars');
var app = express();

var PORT = 8080;

app.listen(PORT, function (){
  console.log("listening");
})

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(PORT);

app.get('/icecream', function (req, res){
  var data = {
    names: icecreams.name,
    price: icecreams.price,
    awesomeness: icecreams.awesomeness
  }
  res.render('main', data);
});
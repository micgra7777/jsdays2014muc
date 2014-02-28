var express = require('express');
var hbs = require('express-hbs');
var routes = require('./routes');

var app = express();

app.engine('hbs', hbs.express3());
app.set('views', require('path').join(__dirname, 'views'));
app.set('view engine', 'hbs');

routes(app);

app.listen(8080);
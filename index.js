var express = require('express');
var hbs = require('express-hbs');
var routes = require('./routes');
var path = require('path');

var app = express();

app.engine('hbs', hbs.express3());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.logger());

app.use(express.static(__dirname+'/public'));

app.use(express.bodyParser());

routes(app);

app.listen(8080);
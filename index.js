var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.end('Hallo Welt');
});

app.listen(8080);
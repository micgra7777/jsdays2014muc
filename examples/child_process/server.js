var http = require('http');
var prime = require('./prime');

var server = http.createServer(function (req, res) {
    console.time('request answered in');
    console.log('incoming request');

    var number = prime();

    res.end('result: ' + number);

    console.timeEnd('request answered in');
});

server.listen(8080);
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
var prime = require('./prime');

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    http.createServer(function(req, res) {
        console.time('request answered in');
        console.log('incoming request');

        var number = prime();

        res.end('result: ' + number);

        console.timeEnd('request answered in');
    }).listen(8080);
}
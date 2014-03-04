var http = require('http');
var cp = require('child_process');

var server = http.createServer(function (req, res) {
    console.time('request answered in');
    console.log('incoming request');

    var child = cp.fork('./helper.js');
    child.on('message', function (data) {
        res.end('result: ' + data);

        console.timeEnd('request answered in');
    });
});

server.listen(8080);
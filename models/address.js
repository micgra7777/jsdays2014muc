var CsvDB = require('csv-db');
var address = new CsvDB('db/addr.csv', ['id', 'firstname', 'lastname', 'phone', 'email']);

module.exports = address;
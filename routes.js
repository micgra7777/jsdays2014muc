var indexController = require('./controllers/index')

module.exports = function (app) {
    app.get('/', indexController.index);
};
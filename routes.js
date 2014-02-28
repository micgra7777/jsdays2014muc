var indexController = require('./controllers/index')

module.exports = function (app) {
    app.get('/', indexController.index);
    app.get('/delete/:id', indexController.delete);
};
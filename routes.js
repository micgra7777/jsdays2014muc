var indexController = require('./controllers/index')

module.exports = function (app) {
    app.get('/', indexController.index);
    app.get('/delete/:id', indexController.delete);
    app.get('/edit/(id)?', indexController.edit);
    app.post('/edit', indexController.save);
};
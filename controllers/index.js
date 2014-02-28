var addressModel = require('../models/address.js');

module.exports = {
    index: function (req, res) {

        addressModel.get().then(function (addr) {
            res.render('index', {addr: addr});
        });

    },

    'delete': function (req, res) {
        addressModel.delete(req.params.id).then(function () {
            res.redirect('/');
        });
    },

    edit: function (req, res) {
        var id = req.params.id;

        if (id) {

        }

        res.render('form');

    },

    save: function (req, res) {
        var body = req.body;

        var id = body.id;
        delete body.id;
        console.log(id, 'xxx', body);

        if (body.id) {
            addressModel.update(body, body.id).then(function () {res.redirect('/')});
        } else {
            addressModel.insert(body).then(function () {res.redirect('/')});
        }
    }


}
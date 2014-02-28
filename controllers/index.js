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
            addressModel.get(id).then(function (data) {

                var address = {
                    'id': data.id,
                    'firstname': data.firstname,
                    'lastname': data.lastname,
                    'phone': data.phone,
                    'email': data.email
                };

                res.render('form', address);
            });
        } else {
            res.render('form');
        }
    },

    save: function (req, res) {
        var body = req.body;

        var id = body.id;
        delete body.id;

        if (id) {
            addressModel.update(body, id).then(function () {res.redirect('/')});
        } else {
            addressModel.insert(body).then(function () {res.redirect('/')});
        }
    }
};
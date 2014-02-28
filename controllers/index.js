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
    }
}
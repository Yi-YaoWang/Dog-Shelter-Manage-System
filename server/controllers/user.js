const moment = require('moment');

const User = require('../models/user');

/* READ *****************************/

exports.getUsers = (req, res, next) => {
    User.fetchAll()
        .then(([rows]) => {
            //res.send(JSON.stringify(rows));
            console.log(JSON.stringify(rows));
            res.render('user', {
                user: rows,
                title: 'User List',
            });
        })
        .catch(err => console.log(err));
};

exports.postAddUser = (req, res, next) => {
    User.add(req, res)
        .then(([rows]) => {
            res.setHeader('Content-Type', 'application/json');
            res.redirect('/users');
        })
        .catch(err => console.log(err));
};

exports.getDeleteUser = (req, res, next) => {
    User.deleteById(req.query.id)
    .then(([rows]) => {
        res.redirect('/users');
    })
    .catch();
};
const moment = require('moment');

const Doge = require('../models/doge');

/* READ *****************************/

exports.getDoge = (req, res, next) => {
    Doge.fetchMainAtt()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            console.log(JSON.stringify(rows, ["id", "name", "breed", "gender"]));
            //res.send(JSON.stringify(rows));
            res.render('doge', {
                data: rows,
                title: 'Doge List',
            });
        })
        .catch(err => console.log(err));
};

exports.getDetailDoge = async (req, res, next) => {

    let doge;

    const findDogeById = await Doge.findById(req.query.id)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('YYYY-MM-DD');
                console.log('p.date: ', p.date);
            }
            doge = rows;
            //console.log('doge[0].date: ', doge[0].date);
           //console.log('findDogeById(): ', JSON.stringify(rows));
        })
        .catch(err => console.log(err));

    console.log('doge: ', JSON.stringify(doge[0].name));
    
    res.render('detail', {
        data: doge,
        title: 'Detail Doge',
   });

};

exports.getEditDoge = async (req, res, next) => {

    let doge;

    const findDogeById = await Doge.findById(req.query.id)
        .then(([rows]) => {
            doge = rows;
            //console.log('doge[0].date: ', doge[0].date);
           //console.log('findDogeById(): ', JSON.stringify(rows));
        })
        .catch(err => console.log(err));

    console.log('doge: ', JSON.stringify(doge[0].name));
    
    res.render('edit', {
        data: doge,
        title: 'Edit Doge',
   });

};

exports.postAddDoge = (req, res, next) => {

    Doge.add(req, res)
        .then(([rows]) => {
            res.setHeader('Content-Type', 'application/json');
            res.redirect('/doge');
        })
        .catch(err => console.log(err));


};


exports.postUpdateDoge = (req, res, next) => {
    Doge.updateById(req, res)
        .then(([rows]) => {
            res.setHeader('Content-Type', 'application/json');
            res.redirect('/doge');
        })
        .catch(err => console.log(err));
};

exports.getDeleteDoge = (req, res, next) => {
    Doge.deleteById(req.query.id)
        .then(([rows]) => {
            res.redirect('/doge');
        })
        .catch();
};
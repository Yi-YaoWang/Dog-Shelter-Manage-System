const moment = require('moment');

const Doge = require('../models/doge');
const User = require('../models/user');

exports.getDashboard = async (req, res, next) => {

  let doge;
  let dogeCounts;
  let userCount;

  try {
    const getDogeCount = await Doge.getCount()
      .then(([rows]) => {
        dogeCount = rows[0].count;
      })

    const getUserCount = await User.getCount()
      .then(([rows]) => {
        userCount = rows[0].count;
        console.log('user count 1: ', userCount);
      })

    let data = {
      doge: doge,
      dogeCount: dogeCount,
      userCount: userCount
    }

    console.log(JSON.stringify(data));
    //res.send(JSON.stringify(data));

    res.render('dashboard', {
      title: 'Dashboard',
      color: 'btn-primary',
      icon: 'fa-cog',
      dogeCount: dogeCount,
      userCount: userCount
    });

  } catch (err) {
    console.log(err);
  };

};
var express = require('express');
var router = express.Router();

const dogeController = require('../controllers/doge');

router.get('/', dogeController.getDoge);

router.get('/edit', dogeController.getEditDoge);

router.get('/detail', dogeController.getDetailDoge);

router.post('/add', dogeController.postAddDoge);

router.post('/update', dogeController.postUpdateDoge);

router.get('/delete', dogeController.getDeleteDoge);

module.exports = router;
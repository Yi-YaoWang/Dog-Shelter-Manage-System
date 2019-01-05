var express = require('express');
var router = express.Router();

const userController = require('../controllers/user');

/* GET users listing. */
router.get('/', userController.getUsers);

router.post('/add', userController.postAddUser);

router.get('/delete', userController.getDeleteUser);

module.exports = router;

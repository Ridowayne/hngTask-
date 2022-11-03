const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.route('/myInfo').get(userController.myInfo);
router.route('/calculate').post(userController.calculate);

module.exports = router;

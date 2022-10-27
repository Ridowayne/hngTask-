const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.route("/myInfo").get(userController.myInfo);

module.exports = router;

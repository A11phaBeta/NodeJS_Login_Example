const express = require('express');
var router = express.Router();
var userRouter = require('./user/index');

router.use("/user", userRouter);

module.exports = router;
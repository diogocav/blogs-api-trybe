const express = require('express');
const { userController } = require('../controllers');
const errorHandler = require('../middlewares/userErrorHandler');

require('express-async-errors');

const router = express.Router();

router.post(
  '/',
  userController.createUser,
);

router.use(errorHandler);

module.exports = router;
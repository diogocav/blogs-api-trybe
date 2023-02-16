const express = require('express');
const { userController } = require('../controllers');
const errorHandler = require('../middlewares/userErrorHandler');
const validateJWT = require('../middlewares/validateJWT');

require('express-async-errors');

const router = express.Router();

router.post(
  '/',
  userController.createUser,
);

router.get(
  '/',
  validateJWT,
  userController.getUsers,
);

router.use(errorHandler);

module.exports = router;
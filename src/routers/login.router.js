const express = require('express');
const { loginController } = require('../controllers');
const validateLoginFields = require('../middlewares/validateLoginFields');

require('express-async-errors');

const router = express.Router();

router.post(
  '/',
  validateLoginFields,
  loginController,
);

module.exports = router;
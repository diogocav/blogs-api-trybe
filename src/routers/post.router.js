const express = require('express');
const { postController } = require('../controllers');
const validatePostFields = require('../middlewares/validatePostFields');
const errorHandler = require('../middlewares/postErrorHandler');
const validateJWT = require('../middlewares/validateJWT');

require('express-async-errors');

const router = express.Router();

router.post(
  '/',
  validateJWT,
  validatePostFields,
  postController.createPost,
);

router.get(
  '/',
  validateJWT,
  postController.getPosts,
);

router.use(errorHandler.createPost);

module.exports = router;
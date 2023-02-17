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

router.get(
  '/:id',
  validateJWT,
  postController.getPostById,
);

router.use(errorHandler.createPost);
router.use(errorHandler.findPostById);

module.exports = router;
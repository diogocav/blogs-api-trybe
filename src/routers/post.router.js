const express = require('express');
const { postController } = require('../controllers');
const validatePostFields = require('../middlewares/validatePostFields');
const errorHandler = require('../middlewares/postErrorHandler');
const validateJWT = require('../middlewares/validateJWT');
const validateUpdatePostFields = require('../middlewares/validateUpdatePostFields');
const validateUserUpdatePost = require('../middlewares/validateUserUpdatePost');

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

router.put(
  '/:id',
  validateJWT,
  validateUpdatePostFields,
  validateUserUpdatePost,
  postController.updatePostById,
);

router.use(errorHandler.createPost);
router.use(errorHandler.findPostById);

module.exports = router;
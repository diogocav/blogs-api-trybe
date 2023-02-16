// const { categoryService } = require('../services');

const { postService } = require('../services');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const post = await postService.createPost({ id, title, content, categoryIds });
    res.status(201).json(post);
  };

// const getCategories = async (_req, res) => {
//     const categories = await categoryService.getCategories();
//     res.status(200).json(categories);
// };

module.exports = {
    createPost,
    // getCategories,
};
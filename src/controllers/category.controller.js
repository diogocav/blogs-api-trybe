const { categoryService } = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.createCategory(name);
    res.status(201).json(category);
  };

// const getCategories = async (req, res) => {
//     const users = await userService.getUsers();
//     if (!users) throw new Error('Internal Server Error');
//     res.status(200).json(users);
// };

module.exports = {
    createCategory,
    // getCategories,
};
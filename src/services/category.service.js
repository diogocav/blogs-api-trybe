require('dotenv/config');
const { Category } = require('../models');

const createCategory = async (name) => {
    const category = await Category.create({ name });
    return category;
};

// const getCategories = async () => {
//     const users = await User.findAll();
//     const filteredUsers = users
//     .map(({ id, displayName, email, image }) => ({ id, displayName, email, image }));
//     return filteredUsers;
// };

module.exports = {
    createCategory,
    // getCategories,
};
require('dotenv/config');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const schema = require('./validations/validationsInputValues');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const createUser = async ({ displayName, email, password, image }) => {
    schema.validateNewUser({ displayName, email, password });

    const user = await User.findOne({ where: { email } });
    if (user) {
        throw new Error('User already registered');
    }
    await User.create({ displayName, email, password, image });

    const token = jwt.sign({ data: { email } }, secret, jwtConfig);

    return token;
};

// const getUsers = () => User.findAll();

// const getByUsername = (username) => User.findOne({ where: { username } });

// const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
//   getUsers,
//   getByUsername,
//   getByUserId,
};
const { loginService } = require('../services');

// const validateUserOrPassword = (user, password, res) => {
//   if (!user || user.password !== password) {
//     res
//       .status(401)
//       .json({ message: 'Usuário não existe ou senha inválida' });
//     return false;
//   }

//   return true;
// };

module.exports = async (req, res) => {
    const { email, password } = req.body;

    const token = await loginService(email, password);

    res.status(200).json({ token });
};
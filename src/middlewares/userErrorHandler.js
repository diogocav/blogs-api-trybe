module.exports = async (err, _req, res, _next) => {
    switch (err.message) {
        case '"displayName" length must be at least 8 characters long':
          res.status(400)
          .send({ message: '"displayName" length must be at least 8 characters long' });
          break;
        case '"email" must be a valid email':
          res.status(400).send({ message: '"email" must be a valid email' });
          break;
        case '"password" length must be at least 6 characters long':
          res.status(400).send({ message: '"password" length must be at least 6 characters long' });
          break;
        case 'User already registered':
          res.status(409).send({ message: 'User already registered' });
          break;
        default:
          res.status(500).send('Internal Server Error');
      }
};
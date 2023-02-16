const createPost = async (err, _req, res, _next) => {
    switch (err.message) {
        case 'Some required fields are missing':
          res.status(400)
          .send({ message: 'Some required fields are missing' });
          break;
        case 'one or more "categoryIds" not found':
          res.status(400)
          .send({ message: 'one or more "categoryIds" not found' });
          break;

        default:
            res.status(500).send({ message: err.message });
        //   next(err);
      }
    };

// const findUserById = async (err, _req, res, _next) => {
//     switch (err.message) {
//         case 'User does not exist':
//           res.status(404)
//           .send({ message: 'User does not exist' });
//           break;
//         default:
//           res.status(500).send({ message: err.message });
//       }
//     };

module.exports = {
    createPost,
    // findUserById,
};
module.exports = async (err, _req, res, _next) => {
    switch (err.message) {
        case 'Some required fields are missing':
          res.status(400).send({ message: 'Some required fields are missing' });
          break;
        case 'Invalid fields':
          res.status(400).send({ message: 'Invalid fields' });
          break;
        // case 'Invalid email':
        //   res.status(400).send('Invalid email');
        //   break;
        default:
          res.status(500).send('Internal Server Error');
      }
};

// Requisições que precisam de token mas não o receberam devem retornar um código de status 401;
// Um acesso ao criar um recurso, no nosso caso usuário ou post, deve retornar um código de status 201.
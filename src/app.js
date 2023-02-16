const express = require('express');
// const errorHandler = require('./middlewares/errorHandler');
const { loginRouter, userRouter, categoryRouter } = require('./routers');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
// app.use('/post', productsRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

// OBS:
// TESTE = npm run start:test
// caso tenha problema, encerre o teste com [CTRL] + [C] e utilize o script npm run kill:test
// TESTE locais = npm test
// SERVIDOR UP = npm run debug

// OBS2:
// Requisições que precisam de token mas não o receberam devem retornar um código de status 401;
// Requisições que não seguem o formato pedido pelo servidor devem retornar um código de status 400;
// Um problema inesperado no servidor deve retornar um código de status 500;
// Um acesso ao criar um recurso, no nosso caso usuário ou post, deve retornar um código de status 201.

module.exports = app;

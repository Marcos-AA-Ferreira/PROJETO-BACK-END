const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API da Minha Aplicação',
      version: '1.0.0',
      description: 'Documentação da API com Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./Routes/*.js'], // Caminho para os arquivos com as rotas anotadas
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
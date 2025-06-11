const express = require('express')
const RoutesPrivate = require('./Routes/RoutesPrivate')
const RoutesPublic = require('./Routes/RoutesPublic')

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./Services/Swagger');

const host = 'localhost'
const port = 3000

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    return response.send("O server está no ar")
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(RoutesPublic)
app.use(RoutesPrivate)

app.listen(port, host, () => {
    console.log(`Servido inicializando em http://${host}:${port}`)
})
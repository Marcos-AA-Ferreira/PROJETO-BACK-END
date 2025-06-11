const express = require('express');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const UsersRoutes = require('./UsersRoutes');
const CategoryRoutes = require('./CategoryRoutes');
const ProductsRoutes = require('./ProductsRoutes');

const RoutesPrivate =  express.Router();

RoutesPrivate.use((request, response, next) => {

    let auth = false

    if (request.headers.token) {
        const {token} = request.headers;

        try {
            jwt.verify(token, process.env.KEY);
            auth = true;
        } catch (e) {
            return response.status(403).send(e);
        }
    }

    if (auth == false){
        return response.status(403).send('Acesso Negado');
    }
    
    next();
});

RoutesPrivate.use(UsersRoutes);
RoutesPrivate.use(CategoryRoutes);
RoutesPrivate.use(ProductsRoutes);



module.exports = RoutesPrivate;
const express = require('express');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const AuthController = require('../Controllers/AuthController');

const RoutesPublic =  express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login e retorna um token JWT
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: Max
 *               password:
 *                 type: string
 *                 example: s45ops
 *     responses:
 *       200:
 *         description: Login realizado com sucesso, retorna um token JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Login ou senha incorretos
 *       500:
 *         description: Erro interno no servidor
 */

RoutesPublic.post('/login', async (request, response) => {
    
try {
        const { username, password } = request.body;
        const auth = new AuthController();
        const dados = await auth.login(username, password);

        if (dados) {
            const datatoken = {
                id: dados.id,
                email: dados.email,
                username: dados.username,
                exp: Math.floor(Date.now() / 1000) + 3600
            };

            const token = jwt.sign(datatoken, process.env.KEY);
            return response.json({ token });
        }

        return response.status(401).json({ message: "Login ou senha incorreta" });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Erro interno no servidor" });
    }
})

module.exports = RoutesPublic;
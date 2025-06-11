const express = require('express');
const CategoryController = require('../Controllers/CategoryController');

const CategoryRoutes = express.Router();



/**
 * @swagger
 * tags:
 *   name: Categorias
 *   description: Endpoints para gerenciamento de categorias
 */
/**
 * @swagger
 * /category:
 *   get:
 *     summary: Lista todas as categorias
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
/**
 * @swagger
 * /category/{id}:
 *   get:
 *     summary: Consulta uma categoria pelo ID
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Categoria encontrada
 *       404:
 *         description: Categoria não encontrada
 */
/**
 * @swagger
 * /category:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 */
/**
 * @swagger
 * /category/{id}:
 *   put:
 *     summary: Atualiza uma categoria existente
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso
 *       404:
 *         description: Categoria não encontrada
 */
/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Deleta uma categoria
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Categoria deletada com sucesso
 *       404:
 *         description: Categoria não encontrada
 */



const categoryController = new CategoryController();

CategoryRoutes.get('/category', categoryController.listar);
CategoryRoutes.get('/category/:id', categoryController.consultarPorId);
CategoryRoutes.post('/category', categoryController.criar);
CategoryRoutes.put('/category/:id', categoryController.atualizar);
CategoryRoutes.delete('/category/:id', categoryController.deletar);

module.exports = CategoryRoutes;
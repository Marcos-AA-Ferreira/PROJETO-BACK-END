<h1 align="center">API de Vendas</h1> 

<div align="center"> 
  <img src="https://img.shields.io/badge/Express-5.1.0-blue" alt="Express Badge">
  <img src="https://img.shields.io/badge/Sequelize-6.37.7-lightblue" alt="Sequelize Badge">
  <img src="https://img.shields.io/badge/MySQL2-3.14.1-brightgreen" alt="MySQL2 Badge">
  <img src="https://img.shields.io/badge/JSONWebToken-9.0.2-yellow" alt="JWT Badge">
  <img src="https://img.shields.io/badge/Axios-1.9.0-blueviolet" alt="Axios Badge">
  <img src="https://img.shields.io/badge/Dotenv-16.5.0-success" alt="Dotenv Badge">
  <img src="https://img.shields.io/badge/CryptoJS-4.2.0-orange" alt="CryptoJS Badge">
  <img src="https://img.shields.io/badge/Swagger--UI--Express-5.0.1-lightgrey" alt="Swagger UI Express Badge">
  <img src="https://img.shields.io/badge/Nodemon-3.1.10-red" alt="Nodemon Badge">
  <img src="https://img.shields.io/badge/Jest-29.7.0-pink" alt="Jest Badge"> 
</div> 
<p align="center"> 
  <img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=YELLOW&style=for-the-badge"/>
</p>

<br>

## 📚 Sumário

- [📌 Descrição](#-descrição)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🔧 Funcionalidades](#-funcionalidades)
- [🧩 Estrutura de Pastas](#-estrutura-de-pastas)
- [🌐 Rotas da API](#-rotas-da-api)
- [🧪 Testes e Documentação](#-testes-e-documentação)
- [📦 Exemplos de Requisições (JSON)](#-exemplos-de-requisições-json)

  <br>
  <br>

## 📌 Descrição
Esta API foi desenvolvida com o intuito de fornecer o back-end para uma aplicação de vendas, permitindo o cadastro de usuários e produtos, além de disponibilizar os dados necessários para o funcionamento da aplicação como uma loja virtual.

<br>

---

## 🚀 Tecnologias Utilizadas
- Node.js
- Express 5.1
- Sequelize
- MySQL2
- JWT
- Dotenv
- CryptoJS
- Axios
- Swagger UI Express
- Jest
- Nodemon

<br>

---

  ## 🔧 Funcionalidades

- Criação de tabelas no MySQL (users, products, category, image_product, option_products e productsCategory).
- Criptogafia de senhas com CrytoJs.
- Login e Autenticação.
- Rotas de atualização, buscar, cadastro e remoção de usuários.
- Rotas de atualização, buscar, cadastro e remoção de categorias.
- Rotas de atualização, buscar, cadastro e remoção de produtos.
- testes de rotas com jest.
- Documentação com Swagger.

<br>

---

## 🧩 Estrutura de Pastas

```
PROJETO BACK END/
├── Config/
├── Controllers/
├── database/
├── Models/
├── node_modules/
├── Routes/
├── Services/
├── Tests/
├── .env
├── pack-lock.json
├── package.json
└── server.js
```

<br>

---

## 🌐 Rotas da API

### 📂 Rotas Públicas

- `POST /login` – Realiza login e retorna um token JWT
- exemplo de login:
```json
{
	"email": "maxiliun@gmail.com",
	"password": "s45ops"
}
```

### 🔐 Rotas Privadas (Requerem Token JWT no header)

#### Usuários

- `GET /users` – Lista todos os usuários
- `GET /users/:id` – Busca um usuário
- `POST /users` – Cria um novo usuário
- `PUT /users/:id` – Atualiza usuário  
- `DELETE /users/:id` – Remove usuário

#### Categorias

- `GET /categories` – Lista todas as categorias
- `GET /categories/:id` – Busca uma categoria 
- `POST /categories` – Cria nova categoria  
- `PUT /categories/:id` – Atualiza categoria  
- `DELETE /categories/:id` – Remove categoria

#### Produtos

- `GET /products` – Lista todos os produtos
- `GET /products/:id` – Busca um produto 
- `POST /products` – Cadastra novo produto  
- `PUT /products/:id` – Atualiza produto  
- `DELETE /products/:id` – Remove produto

<br>

---

## 🧪 Testes e Documentação

- A documentação da API está disponível via Swagger em:  
  👉 `http://localhost:3000/api-docs`

- Jest:
Para realizar os teste primeiramente deve-se inicia o banco de dados ao executa `node database/syncforce.js` e em seguinda deve-se executa o `node database/execute.js` para pode realizar os teste que possue uma autenticação necessária.
Além é recomendado realizar os testes de forma separada.
- `npx jest Tests/server.test.js --runInBand` - teste do servidor
- `npx jest Tests/authenticate.test.js --runInBand` - teste da rota de autenticação
- `npx jest Tests/users.test.js --runInBand` - testes das rotas de usuários
- `npx jest Tests/category.test.js --runInBand` - testes das rotas de categorias
- `npx jest Tests/product.test.js --runInBand` - testes das rotas de produtos

---

<br>

## 📦 Exemplos de Requisições (JSON)

Abaixo estão exemplos de dados em JSON que podem ser utilizados para cadastrar usuários, categorias e produtos na API.


### 👤 Cadastro de Usuário

```json
{
	"firstname": "Max",
  "surname": "steel",
  "email": "maxiliun@gmail.com",
  "password": "s45ops"
}
```

### 🗂️ Cadastro de Categoria

```json
{
  "name": "Eletrônicos",
  "slug": "eletronicos"
}
```

### 🛍️ Cadastro de Produto

```json
{
  "enabled": 1,
  "name": "Teclado Mecânico",
	"slug": "teclado",
	"use_in_menu": 1,
	"stock": 20,
	"description": "Teclado mecânico com LED RGB e switches vermelhos.",
	"price": 349.50,
	"price_with_discount": 300,
  "Image": {
		"enabled": 1,
		"path": "/uploads/imagens/teclado.jpg"
	},
	"Option": {
		"title": "Teclado",
		"shape": "square",
		"radius": 5,
		"type": "color",
		"values": "teclado"
	},
	"categoria": [1] 
}
```

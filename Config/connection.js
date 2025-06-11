const { Sequelize, DataTypes } = require("sequelize")

require('dotenv').config();

const connection = new Sequelize({
    dialect: "mysql",
    database: "digitalstone",
    hoot: "localhost",
    username: "root",
    port: 3306,
    password: process.env.DB_KEY
});

module.exports = connection;
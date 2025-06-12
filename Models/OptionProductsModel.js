const connection = require('../Config/connection');
const { Model, DataTypes } = require('sequelize');
const Products = require('./ProductsModel');

class OptionProducts extends Model{}

OptionProducts.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Products,
                key: 'id'
            },
            onDelete: "CASCADE"
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        shape: {
            type: DataTypes.ENUM("square", "circle"),
            allowNull: true,
            defaultValue: "square"
        },
        radius: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        type: {
            type: DataTypes.ENUM("text", "color"),
            allowNull: true,
            defaultValue: "text"
        },
        values: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true,
                is: /^[^,]+(,[^,]+)*$/i
            }
        }
    },
    {
        sequelize: connection,
        timestamps: false,
        tableName: 'Opcion_Products'
    }
)

module.exports = OptionProducts;
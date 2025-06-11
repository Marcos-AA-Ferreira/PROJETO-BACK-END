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
        size: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        color: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
    {
        sequelize: connection,
        timestamps: false,
        tableName: 'Opcion_Products'
    }
)

module.exports = OptionProducts;
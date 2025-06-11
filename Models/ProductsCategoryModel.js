const connection = require('../Config/connection');
const { Model, DataTypes } = require('sequelize');
const Products = require('./ProductsModel');
const Category = require('./CategoryModel');

class ProductsCategory extends Model {}

ProductsCategory.init(
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
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Category,
                key: 'id'
            },
            onDelete: "CASCADE"
        },
    },
    {
        sequelize: connection,
        timestamps: false,
        tableName: 'Products_Category'
    }
);

module.exports = ProductsCategory;
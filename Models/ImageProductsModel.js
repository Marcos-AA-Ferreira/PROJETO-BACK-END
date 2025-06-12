const connection = require('../Config/connection');
const { Model, DataTypes } = require('sequelize');
const Products = require('./ProductsModel');

class ImageProducts extends Model{}

ImageProducts.init(
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
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        path: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        sequelize: connection,
        timestamps: false,
        tableName: 'Image_Products'
    }
);

module.exports = ImageProducts;
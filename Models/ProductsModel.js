const connection = require('../Config/connection');
const { Model, DataTypes } = require('sequelize');

class Products extends Model{
    static associate({ ProductsCategory, Category, ImageProducts, OptionProducts}) {
        Products.hasOne(ImageProducts, {foreignKey: "product_id", as: "Image"});
        Products.hasOne(OptionProducts, {foreignKey: "product_id", as: "Option"});

        Products.belongsToMany(Category, {
            through: ProductsCategory,
            foreignKey: 'product_id',
            otherKey: 'category_id',
            as: 'categorias'
        });
    }
}

Products.init(
    {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        mark: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        reference: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        value:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        sequelize: connection
    }
);

module.exports = Products;
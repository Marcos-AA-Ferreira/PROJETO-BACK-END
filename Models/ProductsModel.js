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
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        use_in_menu: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        price_with_discount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    },
    {
        sequelize: connection
    }
);

module.exports = Products;
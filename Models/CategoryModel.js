const connection = require('../Config/connection');
const { Model, DataTypes } = require('sequelize');

class Category extends Model {}

Category.init(
    {
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
        }
    },
    {
        sequelize: connection,
    }
);

module.exports = Category;
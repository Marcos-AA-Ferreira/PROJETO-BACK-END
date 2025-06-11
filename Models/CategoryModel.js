const connection = require('../Config/connection');
const { Model, DataTypes } = require('sequelize');

class Category extends Model {}

Category.init(
    {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
    {
        sequelize: connection,
        timestamps: false
    }
);

module.exports = Category;
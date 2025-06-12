const connection = require('../Config/connection');
const { DataTypes, Model } = require("sequelize");

class Users extends Model {}

Users.init(
    {
        firstname: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
    },
    {
        sequelize: connection,
    }
);

module.exports = Users;
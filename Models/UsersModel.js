const connection = require('../Config/connection');
const { DataTypes, Model } = require("sequelize");

class Users extends Model {}

Users.init(
    {
        is_active: {
            type: DataTypes.TINYINT(1),
            defaultValue: 0,
            allowNull: false //NOT NULL
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false //NOT NULL
        },
        username: {
            type: DataTypes.STRING(45),
            allowNull: false //NOT NULL
        },
        password: {
            type: DataTypes.STRING(45),
            allowNull: false //NOT NULL
        },
    },
    {
        sequelize: connection,
    }
);

module.exports = Users;
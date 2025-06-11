const MD5 = require('crypto-js/md5')
const UsersModel = require("../Models/UsersModel");

class AuthController {
    async login(username, password){
        const dados = await UsersModel.findAll({
            where:{
                username: username,
                password: MD5(password).toString()
            }
        });

        return dados;
    }
}

module.exports = AuthController;
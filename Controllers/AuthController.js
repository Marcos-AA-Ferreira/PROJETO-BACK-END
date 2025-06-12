const MD5 = require('crypto-js/md5')
const UsersModel = require("../Models/UsersModel");

class AuthController {
    async login(email, password){
        const dados = await UsersModel.findAll({
            where:{
                email: email,
                password: MD5(password).toString()
            }
        });

        return dados;
    }
}

module.exports = AuthController;
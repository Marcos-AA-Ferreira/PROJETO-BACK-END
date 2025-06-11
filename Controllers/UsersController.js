const MD5 = require('crypto-js/md5');
const UsersModel = require('../Models/UsersModel');

class UsersController {

    async listar(request, response) {
        const users = await UsersModel.findAll();
        return response.status(200).json(users);
    }

    async consultarPorId(request, response) {
        const id = Number(request.params.id);
        const dados = await UsersModel.findByPk(id);

        if (!dados) {
            return response.status(404).json({ message: "Usuário não encontrado" });
        }

        return response.status(200).json(dados);
    }

    async criar(request, response) {
        const body = request.body;
        const password = MD5(body.password).toString();
        body.password = password;

        await UsersModel.create(body);

        return response.status(201).json({
            message: "Usuário cadastrado com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = Number(request.params.id);
        const body = request.body;

        const [linhasAfetadas] = await UsersModel.update(body, { where: { id } });

        if (linhasAfetadas === 0) {
            return response.status(404).json({ message: "Usuário não encontrado" });
        }

        return response.status(200).json({
            message: "Usuário atualizado com sucesso"
        });
    }

    async deletar(request, response) {
        const id = Number(request.params.id);
        const linhasAfetadas = await UsersModel.destroy({ where: { id } });

        if (linhasAfetadas === 0) {
            return response.status(404).json({ message: "Usuário não encontrado" });
        }

        return response.status(200).json({
            message: "Usuário deletado com sucesso"
        });
    }

}

module.exports = UsersController;
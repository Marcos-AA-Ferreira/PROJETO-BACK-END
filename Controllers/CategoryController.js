const Category = require("../Models/CategoryModel");

class CategoryController{

    async listar(request, response) {
        const categoria = await Category.findAll();
        return response.status(200).json(categoria);
    }

    async consultarPorId(request, response) {
        const id = Number(request.params.id);
        const categoria = await Category.findByPk(id);

        if (!categoria) {
            return response.status(404).json({ message: "Categoria não encontrada" });
        }

        return response.status(200).json(categoria);
    }

    async criar(request, response) {
        const body = request.body;

        await Category.create(body);

        return response.status(201).json({
            message: "Categoria cadastrada com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = Number(request.params.id);
        const body = request.body;

        const [linhasAfetadas] = await Category.update(body, { where: { id } });

        if (linhasAfetadas === 0) {
            return response.status(404).json({ message: "Categoria não encontrada" });
        }

        return response.status(200).json({
            message: "Categoria atualizada com sucesso"
        });
    }

    async deletar(request, response) {
        const id = Number(request.params.id);
        const linhasAfetadas = await Category.destroy({ where: { id } });

        if (linhasAfetadas === 0) {
            return response.status(404).json({ message: "Categoria não encontrada" });
        }

        return response.status(200).json({
            message: "Categoria deletada com sucesso"
        });
    }
}

module.exports = CategoryController;
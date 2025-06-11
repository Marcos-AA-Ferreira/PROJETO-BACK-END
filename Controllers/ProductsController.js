const Category = require("../Models/CategoryModel");
const ImageProducts = require("../Models/ImageProductsModel");
const OptionProducts = require("../Models/OptionProductsModel");
const ProductsCategory = require("../Models/ProductsCategoryModel");
const Products = require("../Models/ProductsModel");

class ProductsController {

    constructor() {
        Products.associate({
            ImageProducts,
            OptionProducts,
            ProductsCategory,
            Category
        });
    }

    async listar(request, response) {
        const produto = await Products.findAll({
            attributes: ["id", "name", "mark", "reference", "value", "description"],
            include: [
                {model: ImageProducts, attributes: ["path_image"], as: 'Image'},
                {model: OptionProducts, attributes: ["size", "color"], as: 'Option'},
                {model: Category, attributes: ["name"], as: 'categorias', through: { attributes: [] }}
            ]
        });
        return response.status(200).json(produto);
    }

    async consultarPorId(request, response) {
        const id = Number(request.params.id);
        const produto = await Products.findByPk(id, {
            attributes: ["id", "name", "mark", "reference", "value", "description"],
            include: [
                {model: ImageProducts, attributes: ["path_image"], as: 'Image'},
                {model: OptionProducts, attributes: ["size", "color"], as: 'Option'},
                {model: Category, attributes: ["name"], as: 'categorias', through: { attributes: [] }}
            ]
        });

        if (!produto) {
            return response.status(404).json({ message: "produto não encontrado" });
        }

        return response.status(200).json(produto);
    }

    async criar(request, response) {
        Products.belongsToMany(Category, {
            through: ProductsCategory, 
            foreignKey: 'product_id', 
            otherKey: 'category_id'
        });

        const {categoria, ...body} = request.body;

        let produto = await Products.create(body, {
            include: [
                {
                    through: ProductsCategory,
                    model: Category
                },
                {
                    model: ImageProducts,
                    as: 'Image'
                },
                {
                    model: OptionProducts,
                    as: 'Option'
                }
            ]
        });

        if (categoria && categoria.length > 0) {
            await produto.setCategorias(categoria);
        }

        return response.status(201).json({
            message: "produto cadastrado com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = Number(request.params.id);
        const body = request.body;

        const [linhasAfetadas] = await Products.update(body, { where: { id } });

        if (linhasAfetadas === 0) {
            return response.status(404).json({ message: "produto não encontrado" });
        }

        return response.status(200).json({
            message: "produto atualizado com sucesso"
        });
    }

    async deletar(request, response) {
        const id = Number(request.params.id);
        const linhasAfetadas = await Products.destroy({ where: { id } });

        if (linhasAfetadas === 0) {
            return response.status(404).json({ message: "produto não encontrado" });
        }

        return response.status(200).json({
            message: "produto deletado com sucesso"
        });
    }
}

module.exports = ProductsController;
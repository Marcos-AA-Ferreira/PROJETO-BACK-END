const Api = require('./Api');

let token;

beforeAll(async () => {
    const res = await Api.post('/login', {
        email: "maxiliun@gmail.com",
	    password: "s45ops"
    });
    token = res.data.token;
});

const getHeaders = () => ({
    headers: {
        token: token
    }
});

//npx jest Tests/product.test.js --runInBand

describe('Testes da rota /products', () => {

    /*test('Criar produto', async () => {
        const response = await Api.post('products', {
            enabled: 1,
            name: "Teclado Mecânico",
            slug: "Redragon",
            use_in_menu: 1,
            stock: 20,
            description: "Teclado mecânico com LED RGB e switches vermelhos.",
            price: 349.50,
            price_with_discount: 300,
            Image: {
                enabled: 1,
                path: "/uploads/imagens/teclado.jpg"
            },
            Option: {
                title: "Teclado",
                shape: "square",
                radius: 5,
                type: "color",
                values: "teclado"
            },
            categoria: [1] 
        }, getHeaders());

        expect(response.status).toBe(201);
        expect(response.data.message).toBe("produto cadastrado com sucesso");
    });*/

    test('Buscar todos os produtos', async () => {
        const response = await Api.get('products', getHeaders());

        expect(response.status).toBe(200);
        console.log(response.data);
    });

    /*test('Buscar um produto', async () => {
        const response = await Api.get('products/1', getHeaders());

        expect(response.status).toBe(200);
        console.log(response.data);
    });

    test('Buscar um produto que não existente', async () => {
        try {
            await Api.get('products/9999', getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });*/

    /*test('Atualizar um produto', async () => {
        const response = await Api.get('products/1', getHeaders());

            expect(response.status).toBe(200);
            console.log(response.data);

        const response2 = await Api.put('products/1', {
            enabled: 0,
            stock: 5,
            price: 319.50
        }, getHeaders());

        expect(response2.status).toBe(200);
        expect(response2.data.message).toBe("produto atualizado com sucesso");
        console.log(response2.data);

        const response3 = await Api.get('products/1', getHeaders());

        expect(response3.status).toBe(200);
        console.log(response3.data);
    });

    test('Atualizar um produto que não existente', async () => {
        try {
            await Api.put('products/9999', {
            name: "Esporte"
        }, getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });*/

    /*test('Deletar um produto', async () => {
        const response = await Api.get('products/1', getHeaders());

        expect(response.status).toBe(200);
        console.log(response.data);

        const response2 = await Api.delete('products/1', getHeaders());

        expect(response2.status).toBe(200);
        expect(response2.data.message).toBe("produto deletado com sucesso");
        console.log(response2.data);

        try {
            await Api.get('products/1', getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });

    test('Deletar um produto que não existente', async () => {
        try {
            await Api.delete('products/9999', getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });*/
});
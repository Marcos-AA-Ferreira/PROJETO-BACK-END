const Api = require('./Api');

let token;

beforeAll(async () => {
    const res = await Api.post('/login', {
        username: "Max",
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
            name: "Teclado Mecânico",
            mark: "Redragon",
            reference: 987654,
            value: 349.00,
            description: "Teclado mecânico com LED RGB e switches vermelhos.",
            Image: {
                path_image: "/uploads/imagens/teclado.jpg"
            },
            Option: {
                "color": "Preto",
                "size": 39
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
            mark: "kbum",
            reference: 12345,
            description: "Teclado mecânico com LED RGB e switches azul.",
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
        const response = await Api.get('products/6', getHeaders());

        expect(response.status).toBe(200);
        console.log(response.data);

        const response2 = await Api.delete('products/6', getHeaders());

        expect(response2.status).toBe(200);
        expect(response2.data.message).toBe("produto deletado com sucesso");
        console.log(response2.data);

        try {
            await Api.get('products/6', getHeaders());
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
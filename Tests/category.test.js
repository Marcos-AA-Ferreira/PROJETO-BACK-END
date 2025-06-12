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

//npx jest Tests/category.test.js --runInBand

describe('Testes da rota /category', () => {

    /*test('Criar categoria', async () => {
        const response = await Api.post('category', {
                name: "Casual",
                slug: "Também não sei"
            }, getHeaders());

        expect(response.status).toBe(201);
        expect(response.data.message).toBe("Categoria cadastrada com sucesso");
    });*/

    test('Buscar todas as categoria', async () => {
        const response = await Api.get('category', getHeaders());

        expect(response.status).toBe(200);
        console.log(response.data);
    });

    /*test('Buscar uma categoria', async () => {
        const response = await Api.get('category/1', getHeaders());

        expect(response.status).toBe(200);
        console.log(response.data);
    });

    test('Buscar uma categoria que não existente', async () => {
        try {
            await Api.get('category/9999', getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });*/

    /*test('Atualizar uma categoria', async () => {
        const response = await Api.get('category/1', getHeaders());

            expect(response.status).toBe(200);
            console.log(response.data);

        const response2 = await Api.put('category/1', {
            name: "Esporte"
        }, getHeaders());

        expect(response2.status).toBe(200);
        expect(response2.data.message).toBe("Categoria atualizada com sucesso");
        console.log(response2.data);

        const response3 = await Api.get('category/1', getHeaders());

        expect(response3.status).toBe(200);
        console.log(response3.data);
    });

    test('Atualizar uma categoria que não existente', async () => {
        try {
            await Api.put('category/9999', {
            name: "Esporte"
        }, getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });*/

    /*test('Deletar uma categoria', async () => {
        const response = await Api.get('category/1', getHeaders());

        expect(response.status).toBe(200);
        console.log(response.data);

        const response2 = await Api.delete('category/1', getHeaders());

        expect(response2.status).toBe(200);
        expect(response2.data.message).toBe("Categoria deletada com sucesso");
        console.log(response2.data);

        try {
            await Api.delete('category/1', getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });

    test('Deletar uma categoria que não existente', async () => {
        try {
            await Api.delete('category/9999', getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });*/
});
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

//npx jest Tests/users.test.js --runInBand

describe('Testes da rota /users', () => {

    /*test('Criar usuário', async () => {
        const response = await Api.post('users', {
            firstname: "jest"
            surname: "user"
            email: "jestuser@example.com",
            password: "jest123"
        }, getHeaders());

        expect(response.status).toBe(201);
        expect(response.data.message).toBe("Usuário cadastrado com sucesso");
    });*/

    test('Buscar todos os usuários', async () => {
        const response = await Api.get('users', getHeaders());

        expect(response.status).toBe(200);
        console.log(response.data);
    });

    /*test('Buscar um usuário', async () => {
        const response = await Api.get('users/1', getHeaders());

        expect(response.status).toBe(200);
        console.log(response.data);
    });

    test('Buscar um usuário que não existente', async () => {
        try {
            await Api.get('users/9999', getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });*/

    /*test('Atualizar um usuário', async () => {
        const response = await Api.get('users/2', getHeaders());

            expect(response.status).toBe(200);
            console.log(response.data);

        const response2 = await Api.put('users/2', {
            firstname: "JestUser",
            email: "jest@example.com"
        }, getHeaders());

        expect(response2.status).toBe(200);
        expect(response2.data.message).toBe("Usuário atualizado com sucesso");
        console.log(response2.data);

        const response3 = await Api.get('users/2', getHeaders());

        expect(response3.status).toBe(200);
        console.log(response3.data);
    });

    test('Atualizar um usuário que não existente', async () => {
        try {
            await Api.put('users/9999', {
            firstname: "JestUser",
            email: "jest@example.com"
        }, getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });*/

    /*test('Deletar um usuário', async () => {
        const response = await Api.get('users/2', getHeaders());

        expect(response.status).toBe(200);
        console.log(response.data);

        const response2 = await Api.delete('users/2', getHeaders());

        expect(response2.status).toBe(200);
        expect(response2.data.message).toBe("Usuário deletado com sucesso");
        console.log(response2.data);

        try {
            await Api.get('users/2', getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });

    test('Deletar um usuário que não existente', async () => {
        try {
            await Api.delete('users/9999', getHeaders());
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });*/
});
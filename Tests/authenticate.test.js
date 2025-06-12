const Api = require('./Api')
const jwt = require('jsonwebtoken')

require('dotenv').config();

//npx jest Tests/authenticate.test.js --runInBand

test('Authenticate testing', async () => {
    const response = await Api.post('login', {
        email: "maxiliun@gmail.com",
	    password: "s45ops"
    });

    console.log(response)

    const verify = jwt.verify(response.data.token, process.env.KEY);
    console.log(verify)
})
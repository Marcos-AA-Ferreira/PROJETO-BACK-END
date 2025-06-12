const sequelize = require('../Config/connection');
const User = require('../Models/UsersModel');
const MD5 = require('crypto-js/md5');

async function execute() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const password = MD5("s45ops").toString();

    const user = await User.create({
      firstname: "Max",
      surname: "steel",
      email: "maxiliun@gmail.com",
      password: password
    });

    console.log('Usuário criado:', user.toJSON());
  } catch (error) {
    console.error('Erro:', error);
  } finally {
    await sequelize.close();
  }
}

execute();
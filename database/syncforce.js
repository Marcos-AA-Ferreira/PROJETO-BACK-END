const connection = require('../Config/connection');

require('../Models/UsersModel');
require('../Models/CategoryModel');
require('../Models/ProductsModel');
require('../Models/ImageProductsModel');
require('../Models/OptionProductsModel');
require('../Models/ProductsCategoryModel');

//connection.sync({alter: true});
connection.sync({force: true});
const categoriesRouter=require('../parts/categories/network');
const productsRouter = require('../parts/categories/network');

const routes = function (server){
    server.use('/api/categories', categoriesRouter);
    server.use('/api/products', productsRouter);
}

module.exports = routes;
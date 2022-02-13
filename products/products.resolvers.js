const productsModel = require('./products.model'); 


module.exports = {
    Query: {
      products: () => {
          return productsModel.getAllProducts();
      },
      //args is key to creating filter queries. 
      productsByPrice: (_, args) => {
         return productsModel.getAllProductsByPrice(args.min, args.max);
      }
    }
};
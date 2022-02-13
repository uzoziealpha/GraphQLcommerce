const productsModel = require('./products.model'); 


module.exports = {
    Query: {
      products: () => {
          return productsModel.getAllProducts();
      },
      //args is key to creating filter queries. 
      productsByPrice: (_, args) => {
         return productsModel.getAProductsByPrice(args.min, args.max);
      },
      product: (_, args) => {
        return productsModel.getAProductsById(args.id);
      }
    },
    Mutation: {
      addNewProduct: (_, args) => {
       return productsModel.addNewProduct(args.id, args.description, args.price);
      }
    }
}; 
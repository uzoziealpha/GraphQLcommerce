const { product } = require("puppeteer");

const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejeans",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [], 
  },
];

function getAllProducts() {
  return products;
}

function getAllProductsByPrice(min, max) {
  products.filter((product) => {
    return product.price > min && product.price <= max;
  })
}


function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  })
}

function addNewProduct(id, description, price) {
   const newProduct = {
     id,
     price,
     description,
     reviews: []
   };

   products.push(newProduct);
   return newProduct;
}

module.exports = {
    getAllProducts,
    getAllProductsByPrice,
    getProductById,
    addNewProduct,
};
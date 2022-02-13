const { product } = require("puppeteer");

const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
  },
  {
    id: "bluejeans",
    description: "Blue Jeans",
    price: 55.55,
  },
];

function getAllProducts() {
  return products;
}

module.exports = {
    getAllProducts,
};
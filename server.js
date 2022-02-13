const express = require("express");
//this import will allows us to build schema
const path = require('path');
const { graphqlHTTP } = require("express-graphql");


const { loadFileSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFileSync(path.join(__dirname, '**/*.graphql');

const schema = makeExecutableSchema({
    typeDefs: typesArray
});


const root = {
  products: [
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
  ],
  orders: [
    {
      date: "2020-05-05",
      subtotal: 90.22,
      items: [
        {
          product: {
            id: "redshoe",
            description: 'Old Red shoe',
            price: 45.11,
          },
          quantity: 2,
        },
      ],
    },
  ],
};

const app = express();

// then we choose the path we want graphQl to show
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    //to load our personal graphQL UI we add this anc check browser
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running GraphQL server...");
});

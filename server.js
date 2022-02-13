const express = require("express");
//this import will allows us to build schema
const path = require('path');
const { graphqlHTTP } = require("express-graphql");


const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
//we use the loadsyncfile to look into the resolver folder
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolvers.js'));


const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
});



const app = express();

// then we choose the path we want graphQl to show
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    //to load our personal graphQL UI we add this anc check browser
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running GraphQL server...");
});

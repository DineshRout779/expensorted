require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const cors = require('cors');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const connectDB = require('./config/db');

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    resolvers: resolvers,
    typeDefs: typeDefs,
  });

  app.use(bodyParser.json());
  app.use(cors());

  connectDB();

  await server.start();
  app.use('/graphql', expressMiddleware(server));
  app.listen(8000, () => {
    console.log(`Server running on: http://localhost:8000/graphql`);
  });
}

startServer();

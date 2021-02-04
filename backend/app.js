require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const models =  require('./models');
const auth = require('./auth');
const database = require('./database');

const app = express();
// CORS middleware
app.use(cors())

// Connect to the database
database.connect(process.env.MONGODB_URI);

// Apollo Server setup
const server = new ApolloServer({
  modules: [
    require('./modules/user'),
    require('./modules/course'),
    require('./modules/subject'),
    require('./modules/quiz'),
  ],
  context: async ({ req }) => {
    // Get user token from headers
    const token = req.headers.authorization || '';
    // Try to retrieve a user with the token
    const currentUser = auth(token, process.env.JWT_SECRET);
    // add the db models to the context
    return { models, currentUser };
  }
});

// Apply the Apollo GraphQL middleware and set the path to /graphql
const path = '/graphql';
server.applyMiddleware({ app, path } );

app.listen({ port: 4000 }, () => {
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`);
});
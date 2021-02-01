require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const models =  require('./models');

const app = express();
const path = '/graphql';

app.use(bodyParser.json());


mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to MongoDB'))
  .catch(error => console.error(`error: ${error.message}`));

// Get the user info from JWT
const getUser = token => {
  // Verify that token exist and that starts with bearer
  if(token && token.toLowerCase().startsWith('bearer ')) {
    try {
      // Return token without bearer keyword
      return jwt.verify(token.substring(7), process.env.JWT_SECRET);
    } catch(error) {
      throw new Error('Session invalid');
    }
  }
}

const server = new ApolloServer({ 
  modules: [
    require('./modules/auth'),
    require('./modules/course'),
    require('./modules/subject'),
    require('./modules/quiz'),
  ],
  context: async ({ req }) => {
    // Get user token from headers
    const token = req.headers.authorization;
    // Try to retrieve a user with the token
    const currentUser = getUser(token);
    // add the db models to the context
    return { models, currentUser };
  }
});

server.applyMiddleware({ app, path });

app.listen({ port: 4000 }, () => {
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`);
});
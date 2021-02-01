require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const isAuth = require('./middlewares/auth');

const app = express();
const path = '/graphql';

app.use(bodyParser.json());
app.use(isAuth);
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to MongoDB'))
  .catch(error => console.error(`error: ${error.message}`));

const server = new ApolloServer({ 
  modules: [
    require('./modules/auth/index'),
    require('./modules/course/index'),
    require('./modules/subject/index'),
    require('./modules/registration/index')
  ]
});

server.applyMiddleware({ app, path });

app.listen({ port: 4000 }, () => {
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`);
});
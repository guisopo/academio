const { gql } = require('apollo-server');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserModel = require('../../models/user');

const typeDefs = gql`
  type User {
    id: ID!,
    firstName: String!,
    lastName: String!,
    email: String!,
    password: String,
    type: String!
  }

  type AuthData {
    userId: ID!,
    token: String!,
    tokenExpiration: Int!
  }

  extend type Course {
    author: User!
  }

  extend type Registration {
    user: User
  }

  input UserInput {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    type: String
  }

  input UpdateUserInput {
    id: ID!,
    firstName: String,
    lastname: String,
    email: String,
    password: String
  }

  extend type Query {
    allUsers: [User!]!,
    findUser(email: String!): User,
  }

  extend type Mutation {
    createUser(userInput: UserInput): User,
    updateUser(userInput: UserInput, id: ID): User,
    deleteUser(email: String!, password: String!): User,
    login(email: String!, password: String!): AuthData!,
  }
`;

const resolvers = {
  Query: {
    findUser: async(root, args) => UserModel.findOne({email: args.email}),
  },

  Mutation: {
    createUser: async (root, args) => {
      // Check if user already exists
      if( await UserModel.findOne({ email: args.userInput.email }) ) {
        throw new Error('Email is already used');
      }
      if( await UserModel.findOne({ email: args.userInput.email }) ) {
        throw new Error('This email is already being used');
      }
      const passwordHash = await bcrypt.hash(args.userInput.password, 12);
      const newUser = new UserModel({...args.userInput, password: passwordHash});
      try {
        await newUser.save();
      } catch (error) {
        throw error;
      }
      return { ...newUser._doc, password: null, id: newUser.id }
    },
    
    login: async (root, args) => {

      const user = await UserModel.findOne({email: args.email});
      if(!user) throw new Error(`The email address that you've entered doesn't match any account.`);
      
      const passwordCorrect = await bcrypt.compare(args.password, user.password);
      if(!passwordCorrect) throw new Error(`Incorrect password.`);

      const token = jwt.sign({userId: user.id, email: user.email}, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });

      return { userId: user.id, token: token, tokenExpiration: 1};
    },

    updateUser: async (root, args, req) => {
      // if(!req.isAuth) throw new Error('User not authenticated!');
      try {
        return await UserModel.findByIdAndUpdate(args.id, args.userInput, { new: true });
      } catch (error) {
        throw error;
      }
    },

    deleteUser: async(root, args) => {
      if(!req.isAuth) throw new Error('User not authenticated!');
      try {
        return await UserModel.findOneAndRemove(args.email);
      } catch (error) {
        throw error;
      }
    }
  }
}

module.exports = {
  typeDefs, 
  resolvers
}
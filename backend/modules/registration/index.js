const { gql } = require('apollo-server');
const RegistrationModel = require('../../models/registration');

const typeDefs = gql`
  type Registration {
    id: ID!,
    createdAt: String!,
    updatedAt: String!
  }

  extend type Query {
    allRegistrations: [Registration!]!
  }

  extend type Mutation {
    registerCourse(id: ID): Registration!,
    cancelRegistration(id: ID): Registration!
  }
`;

const resolvers = {
  Query: {
    allRegistrations: async (root, args, req) => {
      // if(!req.isAuth) throw new Error('User not authenticated!');
      try {
        return await RegistrationModel.find();
      } catch (error) {
        throw error;
      }
    }
  },

  Mutation: {
    registerCourse: async (root, args, req) => {
      // if(!req.isAuth) throw new Error('User not authenticated!');
      try {
        const newRegistration = new RegistrationModel({
          user: '5fa9b44c562d5ebfa9db6487',
          course: args.courseId
        });
        return await newRegistration.save();
      } catch (error) {
        throw error;
      }
    },

    cancelRegistration: async (root, args, req) => {
      // if(!req.isAuth) throw new Error('User not authenticated!');
      try {
        return await RegistrationModel.findByIdAndRemove(args.id);
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
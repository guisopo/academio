const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!,
    firstName: String!,
    lastName: String!,
    email: String!,
    password: String,
    avatar: String,
    role: String!,
    testScores: [Int],
    createdAt: DateTime!,
    updatedAt: DateTime!
  }

  extend type Course {
    author: User,
  }

  extend type Subject {
    author: User,
  }

  type AuthData {
    id: ID!,
    token: String!,
    tokenExpiration: Int!,
    role: String
  }

  input UserInput {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
    enrolledCourses: [ID!],
    testScores: [Int],
  }

  type Query {
    allUsers: [User!],
    findUser(email: String!): User,
    me: User!
  }

  type Mutation {
    signUp(args: UserInput): AuthData!
    signIn(email: String!, password: String!): AuthData!,
    updateUser(userId: ID, args: UserInput!): User!,
    deleteUser(email: String!, password: String!): User!,
    updateUserTestScores(score: Int!): User!,
    joinCourse(courseId: ID): User!
  }
`;
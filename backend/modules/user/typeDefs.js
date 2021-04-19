const { gql } = require('apollo-server');

module.exports = gql`
  type Score {
    score: Int
    date: String
  }

  type TestsScores {
    title: String
    scores: [Score]
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    avatar: String
    role: String!
    testsScores: [TestsScores]
    completedTopics: [ID!]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  extend type Course {
    author: User!
  }

  extend type Subject {
    author: User!
  }

  extend type Quiz {
    author: User!
  }

  type AuthData {
    id: ID!
    token: String!
    tokenExpiration: Int!
    role: String!
  }

  input TestScoreInput {
    title: String,
    scores: [Int]
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
    role: String
    enrolledCourses: [ID!]
    testsScores: TestScoreInput
  }

  type Query {
    allUsers: [User!]
    findUser(email: String!): User
    me: User!
  }

  type Mutation {
    signUp(args: UserInput!): AuthData!
    signIn(email: String! password: String!): AuthData!
    updateUser(userId: ID args: UserInput!): User!
    deleteUser(email: String! password: String!): User!
    updateUserTestScore(testTitle: String!, userScore: Int!): User!
    joinCourse(courseId: ID!): User!
    handleTopicCompletion(topicId: ID!): User!
  }
`;
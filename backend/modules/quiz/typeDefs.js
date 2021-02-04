const { gql } = require('apollo-server');

module.exports = gql`
  type Question {
    question: String
    answers: [String!]
    correct: String
  }

  type Quiz {
    id: ID!
    title: String!
    description: String
    questions: [Question!]
    maxTime: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  extend type Course {
    quizzes: [Quiz!]
  }

  input QuestionInput {
    question: String!
    answers: [String!]!
    correct: String!
  }

  input QuizInput {
    title: String!
    description: String
    questions: [QuestionInput!]
    maxTime: Int
    course: ID
  }

  input addQuestionsInput {
    questions: [QuestionInput!]!
  }

  extend type Query {
    allQuizzes: [Quiz!]
    singleQuiz(id: ID!): Quiz
  }

  extend type Mutation {
    createQuiz(args: QuizInput!): Quiz!
    updateQuiz(id: ID! args: QuizInput!): Quiz!
    deleteQuiz(id: ID!): Quiz!
    addQuestionsToQuiz(id: ID! args: addQuestionsInput!): Quiz!
  }
`;
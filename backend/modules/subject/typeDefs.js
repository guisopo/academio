const { gql } = require('apollo-server');

module.exports = gql`
  type Topic {
    id: ID
    title: String
    url: String
  }

  type Subject {
    id: ID!
    title: String!
    description: String
    topics: [Topic]
  }

  extend type Course {
    subjects: [Subject!]
  }

  input TopicInput {
    title: String
    url: String
  }

  input SubjectInput {
    title: String
    description: String
    courses: [ID!]
    topics: [TopicInput]
  }

  extend type Query {
    allSubjects: [Subject!]!
    singleSubject(id: ID): Subject
  }

  extend type Mutation {
    createSubject(args: SubjectInput): Subject
    updateSubject(args: SubjectInput id: ID): Subject
    deleteSubject(id: ID!): Subject
  }
`;
const { gql } = require('apollo-server');

module.exports = gql`
  scalar DateTime

  type Convocation {
    organization: String!
    requirements: [String!]
    state: String
    bulletinLink: String
    officialTestDate: DateTime
  }

  type Course {
    id: ID!
    title: String!    
    area: String!
    description: String
    createdAt: DateTime!
    updatedAt: DateTime!
    convocation: Convocation
  }

  extend type User {
    createdCourses: [Course!]
    enrolledCourses: [Course!]
  }

  input ConvocationInput {
    organization: String
    bulletinLink: String
    requirements: [String!]
    state: String
    officialTestDate: DateTime
  }

  input CourseInput {
    title: String
    area: String
    description: String
    convocation: ConvocationInput
    subjects: [ID!]
  }

  input findCourseInput {
    organization: [String!]
    area: [String!]
  }
  
  extend type Query {
    allCourses: [Course!]
    singleCourse(id: ID!): Course
    findCourse(args: findCourseInput): [Course!]
  }

  extend type Mutation {
    createCourse(args: CourseInput!): Course!
    updateCourse(id: ID! args: CourseInput!): Course!
    deleteCourse(id: ID!): Course!
    addSubjectToCourse(courseId: ID! subjectsId: [ID!]!): Course!
  }
`;
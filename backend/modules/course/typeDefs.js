const { gql } = require('apollo-server');

module.exports = gql`
  scalar DateTime

  type Course {
    id: ID!,
    title: String!,
    organization: String,
    area: String,
    location: String,
    description: String,
    createdAt: DateTime!,
    updatedAt: DateTime!
  }

  extend type User {
    createdCourses: [Course!],
    enrolledCourses: [Course!],
  }

  input CourseInput {
    title: String,
    organization: String,
    area: String,
    location: String,
    description: String,
    subjects: [ID!]
  }

  input findCourseInput {
    organization: [String!],
    area: [String!],
    location: [String!],
  }
  
  extend type Query {
    allCourses: [Course!],
    singleCourse(id: ID!): Course,
    findCourse(args: findCourseInput): [Course!]
  }

  extend type Mutation {
    createCourse(args: CourseInput): Course!,
    updateCourse(id: ID!, args: CourseInput! ): Course,
    deleteCourse(id: ID!): Course!,
    addSubjectToCourse(courseId: ID!, subjectsId: [ID!]!): Course
  }
`;
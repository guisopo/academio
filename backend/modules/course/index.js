const { gql } = require('apollo-server');
const CourseModel = require('../../models/course');

const typeDefs = gql`
  type Course {
    id: ID!,
    title: String!,
    organization: String!,
    area: String!,
    location: String!,
    description: String!
    price: Float!,
    subjects: Subject
  }

  extend type Registration {
    course: Course
  }

  input CourseInput {
    title: String,
    organization: String,
    area: String,
    location: String,
    description: String,
    price: Float,
  }

  input UpdateCourseInput {
    id: ID!,
    title: String,
    organization: String,
    area: String,
    location: String,
    description: String,
    price: Float
  }

  extend type Query {
    allCourses: [Course!]!,
    singleCourse(courseId: ID): Course,
  }

  type Mutation {
    createCourse(courseInput: CourseInput): Course,
    updateCourse(courseInput: CourseInput, id: ID): Course,
    deleteCourse(id: ID!): Course
  }
`;

const resolvers = {
  Query: {
    allCourses: async (root, args) => {
      try {
        return CourseModel.find();
      } catch (error) {
        throw error;
      }
    },

    singleCourse : async (root, args) => {
      try {
        return CourseModel.findById(args.courseId);
      } catch (error) {
        throw(error);
      }
    }
  },

  Mutation: {
    createCourse: async (root, args, req) => {
      // if(!req.isAuth) throw new Error('User not authenticated!');
      // Change later to dinamically get the user id
      const newCourse = new CourseModel({...args.courseInput});
      try {
        const savedCourse = await newCourse.save();
      } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
      }
      return newCourse;
    },

    updateCourse: async (root, args, req) => {
      // if(!req.isAuth) throw new Error('User not authenticated!');
      try {
        return await CourseModel.findByIdAndUpdate(args.id, args.courseInput, { new: true });
      } catch (error) {
        throw error;
      }
    },

    deleteCourse: async(root, args) => {
      // if(!req.isAuth) throw new Error('User not authenticated!');
      try {
        return await CourseModel.findByIdAndRemove(args.id);
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
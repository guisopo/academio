const { AuthenticationError, ForbiddenError } = require('apollo-server-express');
const mongoose = require('mongoose');
const { isAdmin } = require('../helpers');

module.exports = {
  Query: {
    allCourses: async (parent, args, { models }) => {
      try {
        return await models.Course.find();
      } catch (error) {
        throw error;
      }
    },

    singleCourse: async (parent, { id }, { models }) => {
      try {
        return await models.Course.findById(id);
      } catch (error) {
        throw(error);
      }
    },

    findCourse: async (parent, { args }, { models }) => {
      try {
        // Find course depending on arguments
        return await models.Course.find({
         $and: [
            { organization: args.organization },
            { area: args.area }
         ]
        });
      } catch (error) {
        throw(error);
      }
    }
  },

  Mutation: {
    createCourse: async (parent, { args }, { models, currentUser }) => {
      // Check if user is admin
      isAdmin(currentUser);
      try {
        // Create course, add author and return value
        return await models.Course.create({...args, author: mongoose.Types.ObjectId(currentUser.id)});
      } catch (error) {
        throw error;
      }
    },

    updateCourse: async (parent, { id, args }, { models, currentUser }) => {
      // Check if user is admin
      isAdmin(currentUser);
      try {
        // Update course values
        return await models.Course.findByIdAndUpdate(id, {...args}, { new: true });
      } catch (error) {
        throw error;
      }
    },

    deleteCourse: async(parent, { id }, { models, currentUser }) => {
      // Check if user is admin
      isAdmin(currentUser);
      try {
        // Remove course from DB
        return await models.Course.findByIdAndRemove(id);
      } catch (error) {
        throw error;
      }
    },

    addSubjectToCourse: async (parent, { courseId, subjectsId }, { models, currentUser }) => {
      // Check if user is admin
      isAdmin(currentUser);
      try {
        // Find course in DB
        const course = await models.Course.findById(courseId);
        // Throw error if the course has already the subject
        subjectsId.forEach(subjectId => {
          if(course.subjects.find(subject => subject.id === subjectId)) {
            console.log(`${subjectId} was already in the course`)
          } else {
            course.subjects = course.subjects.concat(subjectId);
          }
        });
        // Add subject to course and save it
        return await course.save();
      } catch (error) {
        throw error;
      }
    }
  }
}
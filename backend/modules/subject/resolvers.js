const mongoose = require('mongoose');
const { isAdmin } = require('../helpers');

module.exports = {
  Query: {
    allSubjects: async (root, args, { models }) => {
      try {
        return models.Subject.find();
      } catch (error) {
        throw error;
      }
    },

    singleSubject : async (root, { id }, { models }) => {
      try {
        return models.Subject.findById(id);
      } catch (error) {
        throw(error);
      }
    }
  },

  Mutation: {
    createSubject: async (root, { args }, { models, currentUser }) => {
      try {
        // Check if user is admin
        isAdmin(currentUser);
        // Create subject and append current user as an author
        const subject = await models.Subject.create({...args, author: mongoose.Types.ObjectId(currentUser.id)} );
        // For each course ID insert into each course the subject ID
        args.courses.forEach(async courseId => {
          const course = await models.Course.findById(courseId);
          course.subjects = course.subjects.concat(subject.id);
          course.save();
        });
        // Return subject saved in DB
        return subject;
      } catch (error) {
        throw error;
      }
    },

    updateSubject: async (root, { id, args }, { models, currentUser }) => {
      // Check if user is admin
      isAdmin(currentUser);
      // Update subject
      try {
        const subject = await models.Subject.findByIdAndUpdate(id, {...args}, { new: true });
      } catch (error) {
        throw error;
      }
    },

    deleteSubject: async(root, { id }, { models, currentUser }) => {
      // Check if user is admin
      isAdmin(currentUser);
      // Delete subject
      try {
        return await models.Subject.findByIdAndRemove(id);
      } catch (error) {
        throw error;
      }
    },
  }
}
const mongoose = require('mongoose');
const { isAdmin } = require('../helpers');

module.exports = {
  Query: {
    allQuizzes: async (root, args, { models }) => {
      try {
        return models.Quiz.find();
      } catch (error) {
        throw error;
      }
    },

    singleQuiz : async (root, { id }, { models }) => {
      try {
        return models.Quiz.findById(id);
      } catch (error) {
        throw(error);
      }
    }
  },

  Mutation: {
    createQuiz: async (root, { args }, { models, currentUser }) => {
      try {
        // Check if user is admin
        isAdmin(currentUser);
        // Create quiz
        console.log(models);
        const quiz = await models.Quiz.create({...args} );
        // Find the course and insert the quiz id
        const course = await models.Course.findById(args.course);
        course.quizzes = course.quizzes.concat(quiz.id);
        await course.save();
        // Return quiz saved in DB
        return quiz;
      } catch (error) {
        throw error;
      }
    },

    updateQuiz: async (root, { id, args }, { models, currentUser }) => {
      // Check if user is admin
      isAdmin(currentUser);
      // Update quiz
      try {
        return await models.Quiz.findByIdAndUpdate(id, {...args}, { new: true });
      } catch (error) {
        throw error;
      }
    },

    deleteQuiz: async (root, { id }, { models, currentUser }) => {
      // Check if user is admin
      isAdmin(currentUser);
      // Delete quiz
      try {
        return await models.Quiz.findByIdAndRemove(id);
      } catch (error) {
        throw error;
      }
    },

    addQuestionsToQuiz: async (root, { id, args }, { models, currentUser }) => {
      // Check if user is admin
      isAdmin(currentUser);
      // Add questions to existing quiz
      try {
        const quiz = await models.Quiz.findById(id);
        quiz.questions = quiz.questions.concat(args.questions);
        return await quiz.save();
      } catch (error) {
        throw error
      }
    }
  }
}
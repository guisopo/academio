const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { AuthenticationError, ForbiddenError } = require('apollo-server-express');
require('dotenv').config();
const mongoose = require('mongoose');
const isAdmin = require('../helpers');

module.exports = {
  Query: {
    allUsers: async (parent, args, { models }) => {
      try {
        return await models.User.find();
      } catch (error) {
        throw error;
      }
    },
    findUser: async(parent, { email }, { models }) => {
      try {
        return await models.User.findOne({  email: email });
      } catch (error) {
        throw error;
      }
    },
    me: async(parent, args, { models, currentUser }) => {
      console.log(currentUser.id);
      try {
        return await models.User.findById(currentUser.id)
      } catch (error) {
        throw error;
      }
    }
  },

  Mutation: {
    signUp: async (parent, { args }, { models }) => {
      let { email, password } = args;
      // Normalize email address
      email = email.trim().toLowerCase();
      // Check if user already exists
      if( await models.User.findOne({ email: email }) ) {
        throw new Error('Email is already being used');
      }
      // Encrypt password
      const passwordHash = await bcrypt.hash(password, 12);
      try {
        // Create new user
        const newUser = await models.User.create({
          ...args, 
          password: passwordHash
        });
        // Get json web token
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // Return user id and token
        return { id: newUser.id, role: newUser.role, token: token, tokenExpiration: 1 };
      } catch (error) {
        throw new Error(error);
      }
    },
    
    signIn: async (parent, { email, password }, { models }) => {
      // Normalize email address
      email = email.trim().toLowerCase();
      // Find user
      const user = await models.User.findOne({ email: email });
      if(!user) throw new Error(`The email address that you've entered doesn't match any account.`);
      // Compare password
      const passwordCorrect = await bcrypt.compare(password, user.password);
      if(!passwordCorrect) throw new Error(`Incorrect password.`);
      // Get json web token
      const token = jwt.sign({ id: user.id, email: user.email, role: user.role}, process.env.JWT_SECRET, { expiresIn: '1h' });

      return { id: user.id, role: user.role, token: token, tokenExpiration: 1};
    },

    updateUser: async (parent, { userId, args }, { models, currentUser }) => {
      try {
        // Check if user is admin and there is id argument
        if(currentUser.role === 'Admin' && userId) {
          // Update passed ID user
          return await models.User.findByIdAndUpdate(id, {...args}, { new: true });
        } else {
          // Update current user
          return await models.User.findByIdAndUpdate(currentUser.id, {...args}, { new: true });
        }
      } catch (error) {
        throw error;
      }
    },

    deleteUser: async(parent, { email, password }, { models, currentUser }) => {
      // Check if input email equals current user email
      if(currentUser.email != email) throw new AuthenticationError(`Current email doesn't match with this account email`);
      // Get current user
      const user = await models.User.findById(currentUser.id);
      // Compare input password with user password
      const passwordCorrect = await bcrypt.compare(password, user.password);
      if(!passwordCorrect) throw new Error(`Incorrect password.`);
      try {
        // Remove user from DB
        return await models.User.findOneAndRemove({ email: email });
      } catch (error) {
        throw error;
      }
    },

    updateUserTestScores: async (root, { score }, { models, currentUser }) => {
      // Check if user is admin
      // isAdmin(currentUser);
      // Delete subject
      try {
        const user = await models.User.findById(currentUser.id);
        user.testScores = user.testScores.concat(score);
        return await user.save();
      } catch (error) {
        throw error;
      }
    },

    joinCourse: async (root, { courseId }, { models, currentUser }) => {
      try {
        // Throw error if there is not currentUser
        if(!currentUser) {
          throw new Error('User must be logged in.');
        }
        // Find user in DB
        const user = await models.User.findById(currentUser.id);
        // Throw error if user is already enrolled to this course
        if(user.enrolledCourses.find(course => course.id === courseId)) {
          throw new Error('You are already enrolled to this course.');
        }
        // Enroll course and save user
        user.enrolledCourses = user.enrolledCourses.concat(courseId);
        return await user.save();
      } catch (error) {
        throw error;
      }
    },

    handleTopicCompletion: async(root, { topicId }, { models, currentUser }) => {
      try {
        // Throw error if there is not currentUser
        if(!currentUser) {
          throw new Error('User must be logged in.');
        }
        // Find user in DB
        const user = await models.User.findById(currentUser.id);
        // If topic is already in completedTopics array remove from it
        // else add topic to the array
        if(user.completedTopics.find(topic => topic.toString() === topicId)) {
          user.completedTopics = user.completedTopics.filter(topic => topic.toString() !== topicId);
        } else {
          user.completedTopics = user.completedTopics.concat(topicId);
        }
        // Save user in DB
        return await user.save();
      } catch (error) {
        throw error;
      }
    }
  }
}
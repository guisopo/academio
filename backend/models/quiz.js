const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoPopulate = require('mongoose-autopopulate');

const questionSchema = {
  question: {
    type: String,
    required: true,
    trim: true
  },
  answers: [{
    type: String,
    required: true,
    trim: true
  }],
  correct: {
    type: String,
    required: true,
    trim: true
  }
};

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  questions: [questionSchema]
},
{
  // Assigns createAt and updatedAt fields with a Date type
  timestamps: true
});

quizSchema.plugin(uniqueValidator);
quizSchema.plugin(autoPopulate);

module.exports = mongoose.model('Quiz', quizSchema);

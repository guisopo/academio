const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoPopulate = require('mongoose-autopopulate');

const testsScoresSchema = {
  title: {
    type: String
  },
  scores: [
    {
      score: {
        type: Number
      },
      date: {
        type: String
      }
    }
  ]
};

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 8
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8
  },
  role: {
    type: String,
    required: true,
    trim: true,
    default: 'Student'
  },
  enrolledCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      autopopulate: true
    }
  ],
  completedTopics: [
    {
      type: mongoose.Schema.Types.ObjectId,
    }
  ],
  testsScores: [testsScoresSchema]
},
{
  // Assigns createAt and updatedAt fields with a Date type
  timestamps: true
});

userSchema.path('email').validate( (email) => {
  const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(email);
}, 'Invalid email')

userSchema.plugin(uniqueValidator);
userSchema.plugin(autoPopulate);

module.exports = mongoose.model('User', userSchema);
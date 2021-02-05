const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoPopulate = require('mongoose-autopopulate');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  organization: {
    type: String,
    required: true,
    trim: true
  },
  area: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  requirements: [
    {
      type: String,
      trim: true
    }
  ],
  state: {
    type: String,
    trim: true
  },
  bulletinLink: {
    type: String,
    trim: true
  },
  officialTestDate: {
    type: Date,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
      autopopulate: true
    }
  ],
  quizzes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
      autopopulate: true
    }
  ]
},
{
  // Assigns createAt and updatedAt fields with a Date type
  timestamps: true
});

courseSchema.plugin(uniqueValidator);
courseSchema.plugin(autoPopulate);

module.exports = mongoose.model('Course', courseSchema);

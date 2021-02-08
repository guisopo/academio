const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoPopulate = require('mongoose-autopopulate');

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    trim: true
  },
  url: {
    type: String,
    trim: true
  }
});

const subjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true
  },
  topics: [topicSchema]
},
{
  // Assigns createAt and updatedAt fields with a Date type
  timestamps: true
});

subjectSchema.plugin(uniqueValidator);
subjectSchema.plugin(autoPopulate);

module.exports = mongoose.model('Subject', subjectSchema);

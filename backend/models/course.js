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
  location: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
      autopopulate: {
        select: 'id title'
      }
    }
  ]
});

courseSchema.plugin(uniqueValidator);
courseSchema.plugin(autoPopulate);

module.exports = mongoose.model('Course', courseSchema);

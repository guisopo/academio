const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoPopulate = require('mongoose-autopopulate');

const registrationSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      autopopulate: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: {
        select: 'id email username'
      }
    },
    
  },
  { timestamps: true }
);

registrationSchema.plugin(uniqueValidator);
registrationSchema.plugin(autoPopulate);

module.exports = mongoose.model('Registration', registrationSchema);

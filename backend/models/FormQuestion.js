const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define the Form schema
const formSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [{
    title: {
      type: String,
      required: true,
    },
    answerType: {
      type: String,
      enum: ['Text', 'Checkbox', 'Radio'],
      default: "Text",
    },
    options: {
      type: [String],
    },
  }],
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the Form model
const Form = mongoose.model('Form', formSchema);

module.exports = Form;

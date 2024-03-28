const mongoose  = require('mongoose');
const { Schema } = mongoose;

const quoteSchema = new Schema({
    name: {type: String, required: true}, 
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: false},
    company: {type: String, required: false},
    fromLanguage: {type: String, required: true},
    intoLanguage: {type: String, required: true},
    message: {type: String, required: false},
    isQuote: {type: String, required: false},
  }, { timestamps : true });

  module.exports = mongoose.model('Quote', quoteSchema);
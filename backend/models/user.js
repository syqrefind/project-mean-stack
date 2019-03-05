const Joi = require('joi');
const mongoose = require('mongoose');
 
const User = mongoose.model('User', new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastname: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
  },
   address: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1350
  },
   email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
}));
 
function validateUser(user) {
    const schema = {
        firstname: Joi.string().min(5).max(50).required(),
        lastname: Joi.string().min(5).max(50).required(),
        address: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}
 
exports.User = User;
exports.validate = validateUser;

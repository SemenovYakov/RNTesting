const {Schema, model} = require('mongoose');

const User = new Schema({
  username: {type: String, required: true},
  age: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String},
});

module.exports = model('user', User);

const {Schema, model} = require('mongoose');

const User = new Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  age: {type: Number, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String},
});

module.exports = model('user', User);

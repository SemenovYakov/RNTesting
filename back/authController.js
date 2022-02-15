const User = require('./models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../back/config');

const generateAccessToken = id => {
  const payload = {id};
  return jwt.sign(payload, `${secret}`, {expiresIn: '24h'});
};

let controller = {
  registration: async (req, res) => {
    try {
      const {name, surname, age, email, password, image} = req.body;
      const candidate = await User.findOne({email});
      if (candidate) {
        return res.status(400).json({message: 'This email is already in use'});
      }
      const hashPassword = bcrypt.hashSync(password, 5);
      const user = new User({
        name,
        surname,
        age,
        email,
        password: hashPassword,
        image,
      });
      await user.save();
    } catch (error) {
      console.log(error);
      res.status(400).json({message: `registration error: ${error}`});
    }
  },

  login: async (req, res) => {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({email});
      if (!user) {
        return res.status(400).json({message: 'User undefined'});
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({message: 'Password error'});
      }
      const token = generateAccessToken(user._id);
      return res.json(token);
    } catch (error) {
      res.status(400).json({message: `${error}`});
    }
  },
  users: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json({message: 'No users'});
    }
  },
};

module.exports = controller;

// {
//     "name":"user1",
//     "surname":"user1",
//     "email":"user1",
//     "age":1,
//     "password":"user1",
//     "image":"user1"
// }

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
        res.status(400).send({message: 'This email is already in use'});
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
      res.status(400).send({message: `registration error: ${error}`});
    }
  },

  login: async (req, res) => {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({email});
      if (!user) {
        res.status(400).send({message: 'User undefined'});
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        res.status(400).send({message: 'Password error'});
      }
      const token = generateAccessToken(user._id);
      res.send(token);
    } catch (error) {
      res.status(400).json({message: `${error}`});
    }
  },
  users: async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      res.send({message: 'No users'});
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

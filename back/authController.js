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
      const {username, age, email, password, image} = req.body;
      const emailcheck = await User.findOne({email});
      const usernamecheck = await User.findOne({username});
      if (emailcheck) {
        return res.send({message: 'This email is already in use'});
      } else if (usernamecheck) {
        return res.send({message: 'This username is already in use'});
      } else {
        const hashPassword = bcrypt.hashSync(password, 5);
        const user = new User({
          username,
          age,
          email,
          password: hashPassword,
          image,
        });
        await user.save();
        return res.status(200).send({message: 'registration success'});
      }
    } catch (error) {
      return res.status(400).send({message: `registration error: ${error}`});
    }
  },

  login: async (req, res) => {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({email});
      if (!user) {
        return res.status(400).send({message: 'User undefined'});
      } else {
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
          return res.status(400).send({message: 'Password error'});
        } else {
          const token = generateAccessToken(user._id);
          return res.send(token);
        }
      }
    } catch (error) {
      return res.status(400).json({message: `${error}`});
    }
  },
  users: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      return res.status(400).send({message: 'Database error'});
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

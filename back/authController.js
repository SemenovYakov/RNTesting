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
        return res.json({message: 'This email is already in use'});
      } else if (usernamecheck) {
        return res.json({message: 'This username is already in use'});
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
        return res.status(200).json({message: 'registration success'});
      }
    } catch (error) {
      return res.status(400).json({message: `registration error: ${error}`});
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
      return res.json({token: token});
    } catch (error) {
      return res.status(400).json({message: `${error}`});
    }
  },
  auth: async (req, res) => {
    try {
      const user = await User.findOne({_id: req.user});
      console.log('req', req);
      console.log('auth', user);
      const token = generateAccessToken(user._id);
      return res.json({
        token,
        user: {
          username: user.username,
          age: user.age,
          email: user.email,
          image: user.image,
        },
      });
    } catch (error) {
      return res.status(400).json({message: `${error}`});
    }
  },
};

module.exports = controller;

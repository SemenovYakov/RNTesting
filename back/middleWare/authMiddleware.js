const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({message: 'Auth error'});
    }
    const decoded = jwt.verify(token, config.secret);
    console.log('decoded', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    return res.sendStatus(403).json({message: 'Auth error'});
  }
};

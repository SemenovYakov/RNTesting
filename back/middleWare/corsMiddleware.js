function cors(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}
module.exports = cors;

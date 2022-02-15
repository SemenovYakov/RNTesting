const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./back/authRouter');
const PORT = process.env.PORT || 3000;
const mongoURI =
  'mongodb+srv://YakovAdmin:12345@db.6j3pu.mongodb.net/mongoDB?retryWrites=true&w=majority';
const app = express();
app.use(express.json());
app.use('/auth', authRouter);
const serverStart = async () => {
  try {
    await mongoose.connect(mongoURI);
    await app.listen(PORT, () => console.log('server started ' + `${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

serverStart();

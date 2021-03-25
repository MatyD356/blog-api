const mongoose = require('mongoose');

const user = new mongoose.Schema({
  username: { type: String, required: true, maxLenght: 50 },
  password: { type: String, required: true, maxLenght: 50 },
  type: { type: String, required: true },
})
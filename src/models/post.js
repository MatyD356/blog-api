const mongoose = require('mongoose');

const post = new mongoose.Schema({
  title: { type: String, required: true, maxLength: 100 },
  body: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timeStamp: { type: Date, default: Date.now },
  isPublic: { type: Boolean, required: true },
});

module.exports = mongoose.model('Post', post);
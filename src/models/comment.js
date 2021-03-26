const mongoose = require('mongoose');

const comment = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 100 },
  body: { type: String, required: true, maxlength: 300 },
  author: { type: String, required: true, maxlength: 100 },
  authorEmail: { type: String, required: true, maxlength: 50 },
  timeStamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', comment);
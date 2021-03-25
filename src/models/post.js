const mongoose = require('mongoose');

const post = new mongoose.Schema({
  title: { type: String, required: true, maxLength: 100 },
  body: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Post', post);
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //get all comments from db
  res.json({ comments: 'comments' })
});

router.get('/:id', (req, res) => {
  res.json({ comment: `comment ${req.params.id}` })
})

module.exports = router;
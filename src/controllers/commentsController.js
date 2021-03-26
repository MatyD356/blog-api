exports.list_post = (req, res) => {
  //get all comments from db
  res.json({ comments: 'comments' })
}

exports.get_comment = (req, res) => {
  res.json({ comment: `comment ${req.params.id}` })
}
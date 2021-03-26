exports.list_posts = (req, res) => {
  //get all posts in db and send
  res.json({ posts: 'posts' });
};

exports.get_post = (req, res) => {
  //get one post and send
  res.json({ username: `post ${req.params.id}` });
}

exports.new_post = (req, res) => {
  //create new post
  res.json({ username: 'new post' });
}
const Post = require('../models/post');

module.exports = {
  async getPosts(req, res, next) {
    const posts = await Post.find({});
    res.render('posts/index', { posts });
  },

  newPost(req, res, next) {
    res.render('posts/new');
  },
};

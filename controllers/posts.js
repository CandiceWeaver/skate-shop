const Post = require('../models/post');

module.exports = {
  async getPosts(req, res, next) {
    const posts = await Post.find({});
    res.render('posts/index', { posts });
  },

  newPost(req, res, next) {
    res.render('posts/new');
  },

  async createPost(req, res, next) {
    // use req.body to create new Post
    const post = await Post.create(req.body);
    res.redirect(`/posts/${post.id}`);
  },
};

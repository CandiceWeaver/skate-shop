const User = require('../models/user');
const passport = require('passport');

module.exports = {
  async postRegister(req, res, next) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      image: req.body.image,
    });
    console.log('registering user');

    await User.register(newUser, req.body.password);

    res.redirect('/');
  },

  postLogin(req, res, next) {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
    })(req, res, next);
  },

  getLogout(req, res, next) {
    req.logout(err => {
      if (err) return next(err);
      res.redirect('/');
    });
  },
};

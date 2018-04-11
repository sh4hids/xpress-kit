const isAuthenticated = function(req, res, next) {
  if (req.user) {
    return next();
  } else {
    res.redirect('/auth/login');
  }
};

module.exports = isAuthenticated;

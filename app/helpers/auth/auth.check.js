const ensureAuthenticated = function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login');
  }
  return next();
};

module.exports = ensureAuthenticated;

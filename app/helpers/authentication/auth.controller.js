const logIn = function (req, res, next) {
  res.render('auth.login');
};

const logOut = function (req, res, next) {
  res.send('Logged out.');
};

const loginWithGoogle = function (req, res, next) {
  res.send('Logged in with google.');
};

module.exports = {
  logIn,
  logOut,
  loginWithGoogle,
};

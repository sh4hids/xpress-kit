const logOut = function (req, res, next) {
  res.send('Logged out.');
};

const googleCallbackHandler = function (req, res, next) {
  res.send('Logged in with google.');
};

const facebookCallbackHandler = function (req, res, next) {
  res.send('Logged in with facebook');
};

const githubCallbackHandler = function (req, res, next) {
  req.login(req.user, () => {
    res.redirect('/api/v1/todos');
  });
};

module.exports = {
  logOut,
  googleCallbackHandler,
  facebookCallbackHandler,
  githubCallbackHandler,
};

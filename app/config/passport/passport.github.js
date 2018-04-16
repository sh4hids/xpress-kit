const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const keys = require('../keys');
const { User } = require('../../components/user');

passport.use(new GitHubStrategy(
  {
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret,
    callbackURL: '/auth/github/redirect',
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOrCreate({ githubId: profile.id }, (err, user) => {
      console.log(user);
      return done(err, user);
    });
  },
));

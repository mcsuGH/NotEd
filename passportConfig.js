var LocalStrategy = require('passport-local');
var bcrypt = require('bcryptjs');
const User = require("./models/user");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(function(username, password, done) {
      User.findOne({ email: username }, function(err, user) {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );
  
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  
  passport.deserializeUser((user, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        id: user.id,
        email: user.email,
      };
      cb(err, userInformation);
    });
  });  
};


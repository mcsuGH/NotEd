var passport = require('passport');

const SessionsController = {
  Login: (req, res, next) => {
    console.log(req.body);
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        throw err;
      }
      if (!user) res.status(400).send("No such user exists");
      else {
        req.logIn(user, (err) => {
          if (err) {
            throw err;
          }
          res.send(user);
        });
      }
    })(req, res, next);
  },
}

module.exports = SessionsController;

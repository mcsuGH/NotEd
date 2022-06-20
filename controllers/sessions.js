const User = require("../models/user");
const bcrypt = require("bcryptjs");

const SessionsController = {
  Login: (req, res) => {
    User.findOne({ username: req.body.username }, async (err, user) => {
      if (err) throw err;
      if (!user) res.send("User does not exist");
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            res.send(user)
          } else {
            res.send("Wrong password")
          }
        });
      }
    });
  },
}

module.exports = SessionsController;

const User = require("../models/user");

const UsersController = {
  Index: (req, res) => {
    res.send("user")
  },

  Create: (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const user = new User({
      email: userEmail,
      password: userPassword,
    });
    user.save((err) => {
      if (err) {
        throw err;
      }
      res.send("User created");
    })
  }
}

module.exports = UsersController;

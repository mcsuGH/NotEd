const User = require("../models/user");
const bcrypt = require("bcryptjs");

const UsersController = {
  Index: (req, res) => {
    res.send(req.user);
  },

  Create: (req, res) => {
    User.findOne({ email: req.body.email }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          email: req.body.email,
          password: hashedPassword,
        });
        
        await newUser.save();
        res.send("User Created");
      }
    });
  }
}

module.exports = UsersController;

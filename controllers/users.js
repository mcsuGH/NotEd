const User = require("../models/user");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const stripe = require("stripe")(process.env.API_KEY);


const UsersController = {
  Index: (req, res) => {
    res.send(req.user);
  },

  Create: (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
          premium: req.body.premium,
        });
        
        await newUser.save();
        res.send("User Created");
      }
    });
  },

  Premium: (req, res) => {
    User.updateOne(
      { _id: req.params.id },
      { premium: true },
      {},
      (err, user) => {
        if (err) {
          throw err;
        }
        res.send("Thanks!");
      }
    )
  },

  Checkout: async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: "gbp",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }
}

module.exports = UsersController;

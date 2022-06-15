const mongoose = require("mongoose");
const User = require("../../models/user");
require("../mongodb_helper");

describe(User, () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has a email, password", () => {
    const user = new User({
      email: "email",
      password: "password",
    });

    expect(user.email).toBe("email");
    expect(user.password).toBe("password");
  })
})

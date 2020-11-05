const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { UserInputError } = require("apollo-server");
module.exports = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();
        console.log("HEREEEEEEE", users);
        return users;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    register: async (_, args, context, info) => {
      let { username, email, password, confirmPassword } = args;
      let errors = {};
      try {
        // TODO: Validate input data
        if (email.trim() === "") errors.email = "Email can not be empty";
        if (username.trim() === "")
          errors.username = "Username can not be empty";
        if (password.trim() === "")
          errors.password = "Password can not be empty";
        if (confirmPassword.trim() === "")
          errors.confirmPassword = "Confirm password can not be empty";

        if (password !== confirmPassword)
          errors.confirmPassword = "Passwords must match";

        // TODO: Check if username / email exists
        const userByUsername = await User.findOne({ where: { username } });
        const userByEmail = await User.findOne({ where: { email } });

        if (username) errors.username = "Username is taken";
        if (email) errors.email = "Email is taken";

        if (Object.keys(errors).length > 0) {
          throw errors;
        }

        // Hash Password
        password = await bcrypt.hash(password, 6);
        // Create user
        const user = await User.create({
          username,
          email,
          password,
        });

        // Return user
        return user;
      } catch (err) {
        throw new UserInputError("Bad input", { errors: err });
      }
    },
  },
};

const { User } = require("../models");
const bcrypt = require('bcryptjs');

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
      const { username, email, password, confirmPassword } = args;

      try {
        // TODO: Validate input data

        // TODO: Check if username / email exists




        // TODO: Create user
        const user = await User.create({
          username,
          email,
          password,
        });

        // TODO: Return user
        return user;
      } catch (err) {
        console.error(err);
      }
    },
  },
};

const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { userId }) => User.findById(userId),
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne(email);

      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }

      const correctPw = await User.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { userId, book }, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(
          userId,
          {
            $addToSet: { savedBooks: book },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You must log in');
    },

    removeBook: (parent, { userId, book }, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(
          userId,
          {
            $pull: { savedBooks: book },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You must log in');
    },
  },
};

module.exports = resolvers;

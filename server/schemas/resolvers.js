const { AuthenticationError } = require("apollo-server-express");
const { Collections, Comments, Image, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    collections: async () => {
      return Collections.find().populate("images");
    },
    images: async () => {
      return Image.find();
    },
    collection: async (parent, { collectionID }) => {
      return Collections.findOne({ _id: collectionID }).populate("images");
    },
    image: async (parent, { imageID }) => {
      return Image.findOne({ _id: imageID });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addCollection: async (parent, { title, description }, context) => {
      return Collections.create({ title, description }).then((collection) => {
        return User.findOneAndUpdate(
          { _id: context.userId },
          { $addToSet: { collections: collection._id } },
          { new: true }
        );
      });
    },
    // addImage: async (parent, { title, description, file }) => {
    //   return Image.create({ title, description, file });
    // },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    // Set up mutation so a logged in user can only remove their collection and no one else's
    removeCollection: async (parent, { collectionId }) => {
      const removeCollection = await Collections.findOneAndRemove({
        _id: collectionId,
      });

      return removeCollection;
    },
    // // Make it so a logged in user can only remove a skill from their own profile
    // removeArtifact: async (parent, args, context) => {
    //   if (context.user) {
    //     return Image.findOneAndDelete({ _id: context.user._id });
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },
};

module.exports = resolvers;

const { AuthenticationError } = require("apollo-server-express");
const { Collections, Comments, Image, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    collections: async () => {
      return Collections.find();
    },
    images: async () => {
      return Image.find();
    },
  },

    collection: async (parent, { collectionId }) => {
      return Collections.findOne({ _id: collectionId });
    },

    artifact: async (parent, { artifactId }) => {
      return Image.findOne({ _id: artifactId });
    },

    //   // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    //   me: async (parent, args, context) => {
    //     if (context.user) {
    //       return Profile.findOne({ _id: context.user._id });
    //     }
    //     throw new AuthenticationError("You need to be logged in!");
    //   },
    // },

    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      },
      addImage: async (parent, { title, description, file }) => {
        return Image.create({ title, description, file });
      },
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

      // Add a third argument to the resolver to access data in our `context`
      // addSkill: async (parent, { profileId, skill }, context) => {
      //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      //   if (context.user) {
      //     return Profile.findOneAndUpdate(
      //       { _id: profileId },
      //       {
      //         $addToSet: { skills: skill },
      //       },
      //       {
      //         new: true,
      //         runValidators: true,
      //       }
      //     );
      //   }
      //   // If user attempts to execute this mutation and isn't logged in, throw an error
      //   throw new AuthenticationError("You need to be logged in!");
      // },

      // Set up mutation so a logged in user can only remove their collection and no one else's
      removeCollection: async (parent, args, context) => {
        if (context.user) {
          return Collections.findOneAndDelete({ _id: context.user._id });
        }
        throw new AuthenticationError("You need to be logged in!");
      },
      // Make it so a logged in user can only remove a skill from their own profile
      removeArtifact: async (parent, args, context) => {
        if (context.user) {
          return Image.findOneAndDelete(
            { _id: context.user._id },
          );
        }
        throw new AuthenticationError("You need to be logged in!");
      },
    },
  },
};

module.exports = resolvers;

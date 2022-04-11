const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Collections {
    _id: ID
    title: String
    description: String
    comments: Int
    user: Int
    images: [Image]
  }

  type Comments {
    _id: ID
    comment1: String
    comment2: String
    comment3: String
    comment4: String
    comment5: String
    image_id: Int
  }

  type Image {
    _id: ID
    title: String
    photographer: String
    image_date: String
    filename: String
    filepath: String
    description: String
    user_id: Int
  }

  type User {
    _id: ID
    name: String
    email: String
    password: String
    title: String
    affiliation: String
    images: [Image]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User]!
    collections: [Collections]!
    collection(collectionID: ID!): Collections
    images: [Image]!
    image(imageID: ID!): Image
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addCollection(title: String!, description: String!): Collections
    removeCollection(collectionId: ID!): Collections
  }
`;

module.exports = typeDefs;

// removeArtifact: Image
// artifact: [artifactID: ID!]
// addImage(title: String!): Image

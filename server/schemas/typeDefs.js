const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Collections {
    id: Int
    title: String
    description: String
    comments: Int
    user: Int
    image: Int
  }

  type Comments {
    id: Int
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
    images: [Image]!
  }

  type Mutation {
    addImage(title: String!): Image
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    removeArtifact: Image
    removeCollection: Collections
  }
`;

module.exports = typeDefs;

// collection: [collectionID: ID!]
// artifact: [artifactID: ID!]

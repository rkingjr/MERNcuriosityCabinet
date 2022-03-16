const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Collections {
    id: INTEGER
    title: String
    description: TEXT
    comments: INTEGER
    user: INTEGER
    image: INTEGER
  }

  type Comments {
    id: INTEGER
    comment1: TEXT
    comment2: TEXT
    comment3: TEXT
    comment4: TEXT
    comment5: TEXT
    image_id: INTEGER
  }

  type Image {
    id: INTEGER
    title: STRING
    photographer: STRING
    image_date: DATE
    filename: STRING
    filepath: STRING
    description: TEXT
    user_id: INTEGER
  }

  type User {
    id: INTEGER
    name: STRING
    title: STRING
    affiliation: STRING
    email: STRING
    password: STRING
  }


// Need to update with queries for our project
  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  // Need to update with mutation for our project
  type Mutation {
    addImage(title: String!): Image
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;

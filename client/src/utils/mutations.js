import { gql } from "@apollo/client";

export const ADD_IMAGE = gql`
  mutation addImage($title: String!) {
    addImage(title: $title) {
      _id
      title
      photographer
      image_date
      filename
      filepath
      description
      user_id
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        title
        affiliation
        images {
          title
          photographer
          image_date
          filename
          filepath
          description
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_COLLECTION = gql`
  mutation addCollection($title: String!, $description: String!) {
    addCollection(title: $title, description: $description) {
      _id
      title
      description
      user
      images {
        title
        photographer
        image_date
        filename
        filepath
        description
      }
    }
  }
`;

export const REMOVE_COLLECTION = gql`
  mutation removeCollection($collectionId: ID!) {
    removeCollection(collectionId: $collectionId) {
      _id
      title
      description
      user
      images {
        title
        photographer
        image_date
        filename
        filepath
        description
      }
    }
  }
`;

export const REMOVE_ARTIFACT = gql`
  mutation removeCollection($artifactId: ID!) {
    removeCollection(artifactId: $artifactId) {
      _id
      title
      photographer
      image_date
      filename
      filepath
      description
      user
    }
  }
`;

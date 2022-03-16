import { gql } from "@apollo/client";

export const QUERY_COLLECTIONS = gql`
  query collections {
    collections {
      _id
      title
      description
      comments
      user
      image
      contributor
    }
  }
`;

export const QUERY_COLLECTION = gql`
  query collection ($collectionId: ID!){
    collection(collectionId: $collectionId) {
      _id
      title
      description
      comments
      user
      image
      contributor
    }
  }
`;

export const QUERY_ARTIFACT = gql`
  query artifact ($artifactId: ID!) {
    image (artifactId: $artifactId) {
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

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
  query collection($collectionId: ID!) {
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

// export const QUERY_ARTIFACT = gql`;
//   query artifact {
//     artifact {
//     }
//   }
// `;

// export const QUERY_CABINETS = gql`
//   query cabinets {
//     cabinets {
//     }
//   }
// `;

export const QUERY_IMAGES = gql`
  query allImages {
    images {
      _id
      title
      filename
      description
    }
  }
`;

export const QUERY_ARTIFACT = gql`
  query getArtifact($imageID: ID!) {
    image(imageID: $imageID) {
      _id
      title
      photographer
      image_date
      filename
      description
    }
  }
`;

// export const QUERY_SINGLE_PROFILE = gql`
//   query singleProfile($profileId: ID!) {
//     profile(profileId: $profileId) {
//       _id
//       name
//       skills
//     }
//   }
// `;

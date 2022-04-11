import { gql } from "@apollo/client";

export const QUERY_COLLECTIONS = gql`
  query collections {
    collections {
      _id
      title
      description
      images {
        filename
      }
    }
  }
`;

export const QUERY_COLLECTION = gql`
  query collection($collectionID: ID!) {
    collection(collectionID: $collectionID) {
      _id
      title
      description
      images {
        _id
        title
        description
        filename
      }
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

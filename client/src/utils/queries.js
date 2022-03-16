import { gql } from "@apollo/client";

// export const QUERY_ARTIFACT = gql`
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

// export const QUERY_IMAGE = gql`
//   query images {
//     image {
//     }
//   }
// `;

export const QUERY_IMAGES = gql`
  query allImages {
    images {
      title
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

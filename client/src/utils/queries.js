import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
export const QUERY_ARTIFACT = gql`
  query artifact {
    artifact {
    }
  }
`;

export const QUERY_CABINETS = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
  query cabinets {
    cabinets {
    }
  }
`;

export const QUERY_IMAGES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
export const QUERY_IMAGE = gql`
  query images {
    image {
    }
  }
`;

export const QUERY_IMAGE = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
      
export const QUERY_IMAGES = gql`
  query images {
    images {
    }
  }
`;

export const QUERY_ARTIFACT = gql`
  query allProfiles {
    profiles {
export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;
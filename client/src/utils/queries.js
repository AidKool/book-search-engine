import { gql } from '@apollo/client';

const QUERY_SINGLE_PROFILE = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
    }
  }
`;

export default QUERY_SINGLE_PROFILE;

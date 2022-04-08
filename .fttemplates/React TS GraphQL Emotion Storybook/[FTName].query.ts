import { gql } from '@apollo/client';

export const QUERY = gql`
  query QueryName {
    queryName {
      id
    }
  }
`;

export const MUTATION = gql`
  mutation MutationName($arg1: String!, $arg2: String!) {
    mutationName(arg1: $arg1, arg2: $arg2) {
      id
    }
  }
`;

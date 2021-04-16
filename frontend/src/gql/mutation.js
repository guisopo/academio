import { gql } from '@apollo/client';

const SIGN_IN = gql`
  mutation SIGN_IN($email: String!, $password: String!) {
  signIn(
    email: $email,
    password: $password
  ) {
    id
    token
    role
  }
}
`;

export { SIGN_IN };
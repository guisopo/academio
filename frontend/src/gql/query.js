import { gql } from '@apollo/client';

const ALL_COURSES = gql`
  query {
    allCourses {
      title
      id
      author {
        email
      }
    }
  }
`;

export { ALL_COURSES };
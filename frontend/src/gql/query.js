import { gql } from '@apollo/client';

const ALL_COURSES = gql`
  query ALL_COURSES {
    allCourses {
      id
      title
      area
      convocation {
        organization
      }
    }
  }
`;

const ME = gql`
  query ME {
    me {
      firstName
      enrolledCourses {
        title
      }
      testScores {
        title
        scores
      }
    }
  }
`;

const SINGLE_COURSE = gql`
  query SINGLE_COURSE($id: ID!) {
    singleCourse( id: $id ) {
      id
      title
      convocation {
        officialTestDate
        bulletinLink
      }
      subjects {
        id
        title
      }
      quizzes {
        title
      }
    }
  }
`;

const SINGLE_SUBJECT = gql`
  query SINGLE_SUBJECT($id: ID!) {
  singleSubject(id: $id) {
  	title
    description
    topics {
      id
      title
    }
  }
}
`;

export { ALL_COURSES, SINGLE_COURSE, SINGLE_SUBJECT, ME };
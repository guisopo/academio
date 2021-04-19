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
        id
        title
      }
      testsScores {
        title
        scores {
          score
          date
        }
      }
    }
  }
`;

const SINGLE_COURSE_ENROLLED = gql`
  query SINGLE_COURSE_ENROLLED($id: ID!) {
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

const SINGLE_COURSE_INFO = gql`
  query SINGLE_COURSE_INFO($id: ID!) {
    singleCourse( id: $id ) {
      id
      title
      area
      convocation {
        officialTestDate
        bulletinLink
      }
      subjects {
        title
        description
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

export { ALL_COURSES, SINGLE_COURSE_ENROLLED, SINGLE_COURSE_INFO, SINGLE_SUBJECT, ME };
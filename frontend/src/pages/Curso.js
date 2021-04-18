import { useQuery } from '@apollo/client';
import React from 'react';
import CursoEnrolled from '../components/CursoEnrolled';
import CursoNotEnrolled from '../components/CursoNotEnrolled';
import { ME } from '../gql/query';

const Curso = props => {
  const id = props.match.params.id
  const { data, loading, error } = useQuery(ME);

  const enrolledCourseId = data?.me.enrolledCourses[0].id;
  
  if(loading) return <p>Loading...</p>
  if(error && data !== undefined) return <p>There was an error...</p>

  return (
    <>
      {
        !data || enrolledCourseId !== id
          ? <CursoNotEnrolled courseId={ id }/>
          : <CursoEnrolled courseId={ id } userData={data}/>
      }
    </>
  );
};

export default Curso;
import React from 'react';
import { useQuery } from '@apollo/client';
import { SINGLE_COURSE_INFO } from '../gql/query';
import AsignaturaCard from './AsignaturaCard';

const CursoNotEnrolled = ({ courseId }) => {

  const { data: courseData, loading: courseLoading, error: courseError } = useQuery(SINGLE_COURSE_INFO, {
    variables: { id: courseId },
  });

  if(courseLoading) return <p>Loaging...</p>
  if(courseError) return <p>There was an error:</p>

  const { title, description, convocation, subjects } = courseData.singleCourse;
  const { officialTestDate, bulletinLink } = convocation;

  const date = new Date(officialTestDate);
  let dateOptions = { month: 'long'};

  return (
    <div id="curso">
      <h1 className="main-title">{title}</h1>
      
      <section className="information">
        <div className="line"></div>
        <h2 className="section-title">Descripción</h2>

        <ul className="information__list">
          <li className="information__item">{ description }</li>
        </ul>
      </section>

      <section className="information">
        <div className="line"></div>
        <h2 className="section-title">Información</h2>

        <ul className="information__list">
          <li className="information__item">La convocatoria para tus oposiciones es el {date.getDate()} de {new Intl.DateTimeFormat('es-ES', dateOptions).format(date)} de {date.getFullYear()}</li>
          <li className="information__item">Consulta el BOE en este <a className="bold" href={bulletinLink}>enlace</a> para conocer todos los detalles.</li>
        </ul>
      </section>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Asignaturas</h2>
        <ul className="list">
          {
            subjects.map((subject) =>
              <AsignaturaCard
                key={subject.id}
                title={subject.title}
              />
            )
          }
        </ul>
      </section>

    </div>
  );
};

export default CursoNotEnrolled;
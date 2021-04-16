import React from 'react';
import CursoCard from './CursoCard';

const CursosList = ({name, cursos}) => {
  return (
    <div>
      <h2 className="list-section__title">{name}</h2>
      <ul className="list">
            {
              cursos.map(curso =>
                  <CursoCard
                    key ={curso.id}
                    id={curso.id}
                    title={curso.title} 
                    subtitle={curso.convocation.organization}
                  />
              )
            }
      </ul>
    </div>
  );
};

export default CursosList;
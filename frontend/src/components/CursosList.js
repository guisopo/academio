import React from 'react';
import CursoCard from './CursoCard';

const CursosList = ({name, cursos}) => {
  return (
    <div>
      <h2 className="list-section__title">{name}</h2>
      <ul className="list">
            {
              cursos.map((curso) =>
                <li key={curso.id} className="list__item item">
                  <CursoCard 
                    title={curso.title} 
                    subtitle={curso.subtitle}
                  />
                </li>
              )
            }
      </ul>
    </div>
  );
};

export default CursosList;
import React, { useState } from 'react';
import SelectArrow from '../icons/SelectArrow';
import CursosList from '../components/CursosList';

import { useQuery } from '@apollo/client';
import { ALL_COURSES } from '../gql/query';

const Cursos = () => {
  const [coursesAreas, setCoursesAreas] = useState([]);

  const { data, loading, error } = useQuery(ALL_COURSES);
  
  if(loading) return <p>Loading...</p>;
  if(error) return <p>There was an error.</p>;

  data.allCourses.forEach(course => {
    if(!coursesAreas.includes(course.area)) setCoursesAreas(coursesAreas.concat(course.area));
  });

  return (
    <div id="cursos">
      <h1 className="main-title">Cursos</h1>

      <section className="filter-section">
        <div className="filter-container">
          <label>Área de oposición:</label>
          <div className="select-container">
            <select name="tipo" id="tipo-select">
              <option value="todas">Todas</option>
              {
                coursesAreas.map(area => <option value={area}>{area}</option>)
              }
            </select>
            <SelectArrow/>
          </div>
        </div>
        <div className="filter-container">
          <label>Localización:</label>
          <div className="select-container">
            <select name="localizacion" id="localizacion-select">
              <option value="todas">Todas</option>
              <option value="todas">Madrid</option>
              <option value="hacienda">Cataluña</option>
              <option value="justicia">Comunidad Valenciana</option>
              <option value="sanidad">País Vasco</option>
              <option value="administracion">Galicia</option>
            </select>
            <SelectArrow/>
          </div>
        </div>
        <div className="line line--full"></div>
      </section>

      <section className="list-section list-section--course">
        {
          coursesAreas.map((area) => 
            <CursosList 
              key={area} 
              name={area} 
              cursos={data.allCourses} />)
        }
      </section>
    </div>
  )
};

export default Cursos;
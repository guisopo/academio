import React from 'react';
import SelectArrow from '../icons/SelectArrow';
import CursosList from './CursosList';

const Cursos = () => {
  const courseAreas = [
    {
      id: 1,
      name: 'Economía y Hacienda',
      cursos: [
        {
          id: 1,
          title: 'Gestión de la administración civil del estado',
          subtitle: 'Administración general del estado',
          link: '/'
        },
        {
          id: 2,
          title: 'Agentes de hacienda pública',
          subtitle: 'Administración general del estado',
          link: '/'
        }
      ]
    },
    {
      id: 2,
      name: 'Justicia',
      cursos: [
        {
          id: 3,
          title: 'Letrado de la administración del estado',
          subtitle: 'Administración general del estado',
          link: '/'
        },
        {
          id: 4,
          title: 'Gestión procesal y administrativa',
          subtitle: 'Administración general del estado',
          link: '/'
        },
        {
          id: 5,
          title: 'Auxilio social',
          subtitle: 'Administración general del estado',
          link: '/'
        }
      ]
    },
    {
      id: 3,
      name: 'Administración general',
      cursos: [
        {
          id: 6,
          title: 'Adminsitrativo del estado',
          subtitle: 'Administración general del estado',
          link: '/'
        },
        {
          id: 7,
          title: 'Técnico auxiliar del estado',
          subtitle: 'Administración general del estado',
          link: '/'
        },
        {
          id: 8,
          title: 'Gestión  de la administración civil del estado',
          subtitle: 'Administración general del estado',
          link: '/'
        }
      ]
    }
  ];

  return (
    <div id="cursos">
      <h1 className="main-title">Cursos</h1>

      <section className="filter-section">
        <div className="filter-container">
          <label>Área de oposición:</label>
          <div className="select-container">
            <select name="tipo" id="tipo-select">
              <option value="todas">Todas</option>
              <option value="hacienda">Economía y Hacienda</option>
              <option value="justicia">Justicia</option>
              <option value="sanidad">Sanidad</option>
              <option value="administracion">Administración General</option>
              <option value="informatica">Informática</option>
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
          courseAreas.map((area) => 
            <CursosList 
              key={area.id} 
              name={area.name} 
              cursos={area.cursos} />)
        }
      </section>
    </div>
  )
};

export default Cursos;
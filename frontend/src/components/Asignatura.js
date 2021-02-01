import React from 'react';
import Breadcrum from './Breadcrum';
import TemarioCard from './TemarioCard';
import TutorInformation from './TutorInformation';
import TutorForm from './TutorForm';
import TutorAvatar from '../images/avatar-profe.jpg';
const Asignatura = () => {
  const temario = [
    {
      id: 1,
      temaPosition: '1',
      title: 'El concepto de persona. Clases de personas. Personas físicas: Nacimiento y extinción',
      checked: true,
      link: '/'
    },
    {
      id: 2,
      temaPosition: '2',
      title: 'El concepto de persona. Clases de personas. Personas físicas: Nacimiento y extinción',
      checked: true,
      link: '/'
    },
    {
      id: 3,
      temaPosition: '3',
      title: 'El concepto de persona. Clases de personas. Personas físicas: Nacimiento y extinción',
      checked: true,
      link: '/'
    },
    {
      id: 4,
      temaPosition: '4',
      title: 'El concepto de persona. Clases de personas. Personas físicas: Nacimiento y extinción',
      checked: true,
      link: '/'
    },
    {
      id: 5,
      temaPosition: '5',
      title: 'El concepto de persona. Clases de personas. Personas físicas: Nacimiento y extinción',
      checked: false,
      link: '/'
    },
    {
      id: 6,
      temaPosition: '6',
      title: 'El concepto de persona. Clases de personas. Personas físicas: Nacimiento y extinción',
      checked: false,
      link: '/'
    },
    {
      id: 7,
      temaPosition: '7',
      title: 'El concepto de persona. Clases de personas. Personas físicas: Nacimiento y extinción',
      checked: false,
      link: '/'
    }
  ];

  const tutor = {
    name: 'M.J. Morant',
    avatar: TutorAvatar
  }

  return (
    <div>
      <Breadcrum parent={'Agentes de hacienda pública'} child={'Derecho civil y mercantil. Economía'}/>
      <h1 className="main-title main-title--BC">Derecho civil y mercantil. Economía</h1>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Descripción</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Temario</h2>
        <ul>
          {
            temario.map(tema=><li key={tema.id} className="list__item"><TemarioCard title={tema.title} temaPosition={tema.temaPosition} checked={tema.checked}/></li>)
          }
        </ul>
      </section>

      <section className="tutor">
        <div className="line"></div>
        <h2 className="section-title">Consulta a tu tutor</h2>
        <TutorInformation avatar={tutor.avatar} name={tutor.name}/>
        <TutorForm/>
      </section>

    </div>
  );
};

export default Asignatura;
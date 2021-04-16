import React from 'react';
import Breadcrum from '../components/Breadcrum';
import TemarioCard from '../components/TemarioCard';
import TutorInformation from '../components/TutorInformation';
import TutorForm from '../components/TutorForm';
import TutorAvatar from '../images/avatar-profe.jpg';
import { useQuery } from '@apollo/client';
import { SINGLE_SUBJECT } from '../gql/query';

const Asignatura = (props) => {
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

  const id = props.match.params.id;

  const { data, loading, error } = useQuery(SINGLE_SUBJECT, {
    variables: { id }
  });

  if(loading) return <p>Loaging...</p>
  if(error) return <p>There was an error.</p>

  const { title, description, topics } = data.singleSubject;

  return (
    <div>
      <Breadcrum parent={'Agentes de hacienda pública'} child={'Derecho civil y mercantil. Economía'}/>
      <h1 className="main-title main-title--BC">{title}</h1>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Descripción</h2>
        <p>{description}</p>
      </section>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Temario</h2>
        <ul>
          {
            topics.map(topic=><li key={topic.id} className="list__item"><TemarioCard title={topic.title}/></li>)
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
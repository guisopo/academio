import React, { useEffect, useState } from 'react';
import NotificationCenter from '../components/NotificationCenter';
import AsignaturaCard from '../components/AsignaturaCard';
import SelectArrow from '../icons/SelectArrow';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SINGLE_COURSE_ENROLLED } from '../gql/query';
 
const CursoEnrolled = ({ userData, courseId }) => {
  const [currentTest, setCurrentTest] = useState('Simulacro oposición');
  const [currentTestData, setCurrentTestData] = useState([]);

  const chartData = {
    labels: currentTestData.scores?.slice(-10).map(result => result.date),
    datasets: [
      {
        label: `Tus últimos resultados de: ${currentTestData?.title}`,
        data: currentTestData?.scores?.slice(-10).map(result => result.score),
        fill: '#fffff',
        backgroundColor: '#16A413',
        borderColor: '#16A413',
        pointHitRadius: 20,
        pointBackgroundColor: '#FBF7F7',
        pointRadius: 4,
        pointBorderWidth: 2,
        pointHoverBorderWidth: 5,
      }
    ]
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            suggestedMax: 100,
            stepSize: 20,
            fontColor: 'black'
          },
          gridLines: {
            borderDash: [2] 
          }
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: 'black'
          },
          gridLines: {
            borderDash: [2],
          }
        }
      ]
    }
  }

  useEffect(() => {
    const test = userData.me.testsScores.find(test => test.title === currentTest);
    if(test) setCurrentTestData(test);
  }, [currentTest, userData.me.testsScores]);

  const { data: courseData, loading: courseLoading, error: courseError } = useQuery(SINGLE_COURSE_ENROLLED, {
    variables: { id: courseId },
  });

  const handleTestSelect = (e) => {
    setCurrentTest(e.target.value);
  }
  
  if(courseLoading) return <p>Loaging...</p>
  if(courseError) return <p>There was an error:</p>

  const { title, convocation, subjects, quizzes } = courseData.singleCourse;
  const { officialTestDate, bulletinLink } = convocation;

  const date = new Date(officialTestDate);
  let dateOptions = { month: 'long'};

  return (
    <div id="curso">
      <h1 className="main-title">{title}</h1>
      
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
          <h2 className="section-title">Notificaciones</h2>
          <NotificationCenter />
      </section>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Asignaturas</h2>
        <ul className="list">
          {
            subjects.map((subject) =>
              <AsignaturaCard
                key={subject.id}
                id={subject.id}
                title={subject.title}
              />
            )
          }
        </ul>
      </section>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Tests</h2>
        <div className="tests-chart">
          <Line data={chartData} options={chartOptions} />
        </div>

        <div className="filter-container">  
          <label>Selecciona el tipo de test para ver tu progresión o realizar una nueva prueba:</label>
          <div className="select-container">
            <select name="tipo" id="tipo-select" defaultValue="Simulacro oposición" onChange={handleTestSelect}>
              {
                quizzes.map(quizz => <option value={quizz.name}>{quizz.name}</option> )
              }
              <option value="Simulacro oposición">Simulacro oposición</option>
              <option value="Parcial 1">Parcial Derecho Civil y Mercantil. Economía</option>
              <option value="Parcial 2">Parcial 2</option>
              <option value="Parcial 3">Parcial 3</option>
            </select>
            <SelectArrow/>
          </div>
          <Link to="/test">
            <button className="button button--primary">comenzar</button>
          </Link>
        </div>

      </section>

    </div>
  );
};

export default CursoEnrolled;
import React, { useContext } from 'react';
import NotificationCenter from '../components/NotificationCenter';
import AsignaturaCard from '../components/AsignaturaCard';
import SelectArrow from '../icons/SelectArrow';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SINGLE_COURSE } from '../gql/query';
import { UserContext } from '../UserContext';
 
const Curso = props => {
  const testsResults = [
    {
      date: '10 FEB',
      result: 73
    },
    {
      date: '22 FEB',
      result: 87
    },
    {
      date: '1 MAR',
      result: 77
    },
    {
      date: '9 MAR',
      result: 90
    },
    {
      date: '16 MAR',
      result: 86
    },
  ];

  const chartData = {
    labels: [],
    datasets: [
      {
        label: 'Últimos 5',
        data: [],
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

  const { user } = useContext(UserContext);
  console.log(user);

  const { data, loading, error } = useQuery(SINGLE_COURSE, {
    variables: { id: props.match.params.id },
  });

  chartData.labels = testsResults.map(test => test.date);
  chartData.datasets[0].data = testsResults.map(test => test.result);


  if(loading) return <p>Loaging...</p>
  if(error) return <p>There was an error.</p>

  const { title, convocation, subjects } = data.singleCourse;
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
          <li className="information__item">Consulta el BOE en este <a href={bulletinLink}>enlace</a> para conocer todos los detalles.</li>
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
          <label>Realizar test:</label>
          <div className="select-container">
            <select name="tipo" id="tipo-select">
              <option value="">Selecciona tipo test</option>
              <option value="asignatura1">Parcial Derecho Civil y Mercantil. Economía</option>
              <option value="simulacro">Simulacro oposición</option>
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

export default Curso;
import React from 'react';
import NotificationCenter from './NotificationCenter';
import AsignaturaCard from './AsignaturaCard';
import SelectArrow from '../icons/SelectArrow';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

const Curso = () => {
  const convocatoria = {
    date: '23 de marzo de 2021',
    link: 'https://www.boe.es/boe/dias/2020/01/08/pdfs/BOE-A-2020-241.pdf'
  };

  const asignaturas = [
    {
      id: 1,
      title: 'Derecho civil y mercantil. Economía',
      progress: 95,
      link: '/',
    },
    {
      id: 2,
      title: 'Derecho civil y mercantil. Economía',
      progress: 22,
      link: '/',
    },
    {
      id: 3,
      title: 'Derecho civil y mercantil. Economía',
      progress: 0,
      link: '/',
    }
  ];

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

  chartData.labels = testsResults.map(test => test.date);
  chartData.datasets[0].data = testsResults.map(test => test.result);

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

  return (
    <div id="curso">
      <h1 className="main-title">Agentes de hacienda pública</h1>
      
      <section className="information">
        <div className="line"></div>
        <h2 className="section-title">Información</h2>

        <ul className="information__list">
          <li className="information__item">La convocatoria para tus oposiciones es el {convocatoria.date}</li>
          <li className="information__item">Consulta el BOE en este <a href={convocatoria.link}>enlace</a> para conocer todos los detalles.</li>
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
            asignaturas.map((asignatura) =>
              <li className="list__item item" key={asignatura.id}>
                  <AsignaturaCard 
                    title={asignatura.title} 
                    progress={asignatura.progress}
                    link={asignatura.link}
                  />
              </li>
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
          <Link to="test">
            <button className="button button--primary">comenzar</button>
          </Link>
        </div>

      </section>

    </div>
  );
};

export default Curso;
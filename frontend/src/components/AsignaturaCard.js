import React from 'react';
import CircleArrow from '../icons/CircleArrow';
import { Link } from 'react-router-dom';

const AsignaturaCard = ({ title, progress, id }) => {
  return (
    <li className="list__item item">
      <Link className="card card--asignatura" to={`/asignatura/${id}`}>
          <div className="card__info">
            <div className="card__title">{title}</div>
            <progress max="100" value={!progress ? '0' : progress}></progress>
          </div>
          <div className="card__cta">
            <CircleArrow/>
          </div>
      </Link>
    </li>
  );
};

export default AsignaturaCard;
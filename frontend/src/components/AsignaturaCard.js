import React from 'react';
import CircleArrow from '../icons/CircleArrow';
import { Link } from 'react-router-dom';

const AsignaturaCard = ({title, progress, link}) => {
  return (
    <Link className="card card--asignatura" to="/asignatura">
      <div className="card__info">
        <div className="card__title">{title}</div>
        <progress max="100" value={progress}></progress>
      </div>
      <div className="card__cta">
        <CircleArrow/>
      </div>
    </Link>
  );
};

export default AsignaturaCard;
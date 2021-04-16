import React from 'react';
import { Link } from 'react-router-dom';
import CircleArrow from '../icons/CircleArrow';

const CursoCard = ({id, title, subtitle}) => {
  return (
    <Link to={`/curso/${id}`}>
      <li className="list__item item">
        <div className="card card--curso">
          <div className="card__info">
            <div className="card__title">{title}</div>
            <div className="card__subtitle">{subtitle}</div>
          </div>
          <div className="card__cta">
            <CircleArrow/>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default CursoCard;
import React from 'react';
import { Link } from 'react-router-dom';
import CircleArrow from '../icons/CircleArrow';

const CursoCard = ({title, subtitle}) => {
  return (
    <Link to="/curso">
      <div className="card card--curso">
        <div className="card__info">
          <div className="card__title">{title}</div>
          <div className="card__subtitle">{subtitle}</div>
        </div>
        <div className="card__cta">
          <CircleArrow/>
        </div>
      </div>
    </Link>
  );
};

export default CursoCard;
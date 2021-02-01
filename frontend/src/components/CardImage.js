import React from 'react';
import { Link } from 'react-router-dom';

const CardImage = ({title, image}) => {

  return (
    <div className="card card--image">
      <Link to="/cursos">
        <div className="image-container card__image">
          <img  src={image} alt=""/>
        </div>
          <h3 className="card__title">{title}</h3>
      </Link>
    </div>
  )
};

export default CardImage;
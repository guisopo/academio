import React from 'react';
import CircleArrow from '../icons/CircleArrow';

const TemarioCard = ({title, checked}) => {
  return (
    <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" className="card card--temario">
      <div className={`card__bullet ${checked ? 'card__bullet--checked' : 'card__bullet--unchecked'}`}></div>
      <div className="card__info">
        <div className="card__title"><span className="bold">T{}_</span>{title}</div>
      </div>
      <div className="card__cta">
        <CircleArrow/>
      </div>
    </a>
  );
};

export default TemarioCard;
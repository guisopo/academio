import React from 'react';

const TutorInformation = ({avatar, name}) => {
  return (
    <div className="tutor__information">
      <div className="notification__avatar image-container">
        <img src={avatar} alt=""/>
      </div>
      <p>{name} es tu tutor para este curso. Consúltale cualquier duda que tengas sobre esta asignatura.</p>
    </div>
  );
};

export default TutorInformation;
import React from 'react';

const TutorForm = () => {
  return (
    <form className="tutor__form" action="">
      <label htmlFor="">Asunto:</label>
      <input type="text"/>
      <label htmlFor="">Comentario:</label>
      <textarea name="" id=""></textarea>
      <button className="button button--primary">Enviar</button>
    </form>
  );
};

export default TutorForm;
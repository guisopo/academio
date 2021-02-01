import React from 'react';
import Arrow from '../icons/Arrow';

const NewsletterForm = () => {

  return (
    
    <form className="form--newsletter">
      <input type="text" placeholder="Tu correo electrónico"/>
      <div className="form--newsletter__checkbox">
        <input id="newsletter-legal" name="newsletter-legal" type="checkbox"/>
        <label>He leido y acepto las políticas de privacidad</label>
      </div>
      <button className="button--arrow" type="submit">
        <Arrow/>
      </button>
    </form>
  )
};

export default NewsletterForm;

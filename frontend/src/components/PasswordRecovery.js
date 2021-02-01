import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(`Email should be sent to: ${email}`);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <div>
      <h1 className="main-title">Inicia sesión</h1>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Tus datos</h2>
        
        <form onSubmit={(e) => sendEmail(e)} className="tutor__form" action="">
          <label htmlFor="">Correo electrónico:</label>
          <input onChange={(e) => handleEmailChange(e)} value={email} type="email" required/>
          <Link to="login">
          <button type="submit" className="button button--primary">Reestablecer contraseña</button>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
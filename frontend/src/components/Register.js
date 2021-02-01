import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatedPassword: '',
    }
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setUserInput({[name]: newValue});
  }

  const handleSubmition = (event) => {
    event.preventDefault();
    console.log(userInput);
    userInput.password !== userInput.repeatedPassword ? console.error('Passwords must match') : console.log(`Register with: ${userInput}`);
  }


  return (
    <div>
      <h1 className="main-title">Crea tu cuenta en academio</h1>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Registro</h2>
        <form onSubmit={(e)=>handleSubmition(e)} className="tutor__form" action="">
          
          <label htmlFor="">Nombre:</label>
          <input type="text" name="firstName" value={userInput.firstName} onChange={handleChange} required/>
          
          <label htmlFor="">Apellidos:</label>
          <input type="text" name="lastName" value={userInput.lastName} onChange={handleChange} required/>
          
          <label htmlFor="">Correo electrónico:</label>
          <input type="email" name="email" required/>
          
          <label htmlFor="">Contraseña:</label>
          <input type="password" name="password" value={userInput.password} onChange={handleChange} required/>
          
          <label htmlFor="">Repite contraseña:</label>
          <input type="password" name="repeatedPassword" value={userInput.repeatedPassword} onChange={handleChange} required/>
          
          <p className="register-condition">Al registrarse, acepta nuestros <a href="/">términos de uso</a> y <a href="/">política de privacidad</a>.</p>
          <Link to="/curso">
            <button className="button button--primary">Crear cuenta</button>
          </Link>
        </form>
      </section>
      <section>
        <div className="line line--thin"></div>
        <p>¿Ya tienes una cuenta en academio? <Link to="/login">Inicia sesión aquí.</Link></p>
      </section>
    </div>
  );
};

export default Register;
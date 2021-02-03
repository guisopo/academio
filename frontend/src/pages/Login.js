import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      email: '',
      password: ''
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
  }

  return (
    <div>
      <h1 className="main-title">Inicia sesión</h1>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Tus datos</h2>
        
        <form onSubmit={(e)=>handleSubmition(e)} className="tutor__form" action="">
          
          <label htmlFor="">Correo electrónico:</label>
          <input onChange={(e) => handleChange(e)} name="email" type="email" required/>
          
          <label htmlFor="">Contraseña:</label>
          <input onChange={(e) => handleChange(e)} name="password" type="password" required/>
          
          <Link to="/recoverpassword">
            <p className="bold">¿Olvidaste tu contraseña?</p>
          </Link>
          <Link to="/curso">
            <button className="button button--primary">Entrar</button>
          </Link>
        
        </form>
      </section>
    </div>
  );
};

export default Register;
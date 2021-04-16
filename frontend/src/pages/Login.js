import React, { useContext, useEffect, useReducer } from 'react';
import { useMutation } from '@apollo/client';
import { Link, Redirect } from 'react-router-dom';
import { SIGN_IN } from '../gql/mutation';
import { UserContext } from '../UserContext';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      email: '',
      password: ''
    }
  );

  const [signIn, { data, loading, error }] = useMutation(SIGN_IN);

  const handleMutation = () => {
    if(data) {
      localStorage.setItem('academio-user-token', data.signIn.token);
      setUser(data.signIn);
    }
  }

  useEffect(handleMutation, [data]);

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setUserInput({[name]: newValue});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signIn({ variables: userInput });
  }

  if(loading) return <p>Loaging...</p>
  if(error) return <p>There was an error.</p>
  if(user) return <Redirect to="/" />;

  return (
    <div>
      <h1 className="main-title">Inicia sesión</h1>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Tus datos</h2>
        
        <form method="POST" onSubmit={handleSubmit} className="tutor__form" action="">
          
          <label htmlFor="">Correo electrónico:</label>
          <input onChange={handleChange} name="email" type="email" required/>
          
          <label htmlFor="">Contraseña:</label>
          <input onChange={handleChange} name="password" type="password" required/>
          
          <Link to="/recoverpassword">
            <p className="bold">¿Olvidaste tu contraseña?</p>
          </Link>

          <button className="button button--primary">Entrar</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const NavMobile = ({ handleClick, handleRoute }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="nav-menu nav-menu--mobile">
      <div className="nav-menu__background"></div>

      <div className="logo-container">
        <Link className="logo logo--white" to="/">academio</Link>
      </div>
      <div onClick={(e) => handleClick(e)} className="hamburger-menu hamburger-menu--close">
          <a className="nav-toggle" href="/" title="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </a>
      </div>
      <ul className="nav-menu__list">
        <Link onClick={(e) => handleRoute(e)} to="/cursos">
          <li>Cursos</li>
        </Link>
        <li>
          Quienes somos
        </li>
        <li>
          Blog
        </li>
        <li>
          Contacto
        </li>
        <li className="line line--full line--white"></li>
        {
          !user
            ?
              <>
                <Link onClick={(e) => handleRoute(e)} to="/register">
                  <li>Regístrate</li>
                </Link>
                <Link onClick={(e) => handleRoute(e)} to="/login">
                  <li>Incia sesión</li>
                </Link>
              </>
            : 
              <Link onClick={(e) => handleRoute(e)} to="/">
                <li>Cierra sesión</li>
              </Link>
        }
      </ul>
    </div>
  );
};

export default NavMobile;
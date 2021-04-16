import React, { useState } from 'react';
import NavMobile from './NavMobile';

const Header = () => {
  const [ navMobileOpen, setNavMobileOpen ] = useState(false);

  const handleRoute = (e) => {
    setNavMobileOpen(false);
    window.scrollTo(0, 0);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setNavMobileOpen(!navMobileOpen);
  }

  return (
    <header>
      <div className="container">
        <a className="logo" href="/">academio</a>
        <div onClick={(e) => handleClick(e)} className="hamburger-menu">
          <div className="nav-toggle" href="#" title="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav>
          <ul>
            <li>Cursos</li>
            <li>Sobre nosotros</li>
            <li>Blog</li>
          </ul>
          <ul>
            <button className="button button--primary">Inicia sesión</button>
            <button>Regístrate</button>
          </ul>
        </nav>
      </div>
      {
        navMobileOpen ? <NavMobile handleClick={handleClick} handleRoute={(e) => handleRoute(e)}  /> : ''
      }
    </header>
  )
};

export default Header;
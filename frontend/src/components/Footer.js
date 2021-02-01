import React from 'react';

const Footer = () => {

  return (
    <footer>
      <a href="/">academio</a>
      <nav>
        <div>
          <h5>Cursos</h5>
          <ul>
            <li><a href="/">Administración general</a></li>
            <li><a href="/">Economía y hacienda</a></li>
            <li><a href="/">Sanidad</a></li>
            <li><a href="/">Justicia</a></li>
            <li><a href="/">Informática</a></li>
          </ul>
        </div>
        <div>
          <h5>Recursos</h5>
          <ul>
            <li><a href="/">Calendario de oposiciones</a></li>
          </ul>
        </div>
        <div>
          <h5>Empresa</h5>
          <ul>
            <li><a href="/">Quiénes somos</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Trabaja con nosotros</a></li>
            <li><a href="/">Contacto</a></li>
            <li><a href="/">Política de privacidad y cookies</a></li>
          </ul>
        </div>
        <div>
          <h5>Ayuda</h5>
          <ul>
            <li><a href="/">Preguntas frecuentes</a></li>
            <li><a href="/">Contacto</a></li>
            <li><a href="/">Código de conducta</a></li>
          </ul>     
        </div>
      </nav>
    </footer>
  )
};

export default Footer;
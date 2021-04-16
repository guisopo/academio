import React, { useState } from 'react';
// Components
import CardImage from '../components/CardImage';
import NewsletterForm from '../components/NewsletterForm';
import Testimonial from '../components/Testimonial';
import Bullets from '../components/Bullets';
// Images
import mainImage from '../images/home.jpg';
import cardImage1 from '../images/administracion.jpg';
import cardImage2 from '../images/sanidad.jpg';
import avatarImage1 from '../images/avatar1.jpg';

const Home = () => {

  return (
    <>
      <section className="hero-section">
        <h1 className="hero-title">Prepara tus oposiciones desde tu casa y a tu ritmo</h1>
        <div className="image-container hero-image">
          <img src={mainImage} alt=""/>
        </div>
        <p className="hero-text">Academio ha nacido para ayudarte a aprobar las oposiciones. Te ofrecemos una plataforma que cuenta con el material didáctico más actualizado, una evaluación continua a través de tests reales y la consulta con tutores especializados en la materia.</p>
      </section>

      <section>
        <div className="line"></div>
        <h2>Áreas de oposiciones</h2>
        <CardImage title="Administración General" image={cardImage1}/>
        <CardImage title="Sanidad" image={cardImage2}/>
      </section>

      <section>
        <div className="line"></div>
        <h2>Próximas convocatorias</h2>
        <p>Regístrate en  nuestra newsletter con la que te avisaremos de las últimas convocatorias y en la que recibirás consejos prácticos de cómo prepararte las oposiciones.</p>
        <NewsletterForm />
      </section>

      <section>
        <div className="line"></div>
        <h2>Testimonios</h2>
        <Testimonial image={avatarImage1} 
          name={'Marta Soler Poquet'}
          position={'Letrada de la administración de justicia'}
          quote={'"Academio me parece la mejor forma de prepararte unas oposiciones. Sin la ayuda de los tutores dudo que hubiese podido conseguir plaza. Además, poder realizar todos los tests que quiera y en cualquier dispositivo fue una gran ventaja."'}
        />
        <Bullets />
      </section>
    </>
  )
};

export default Home;
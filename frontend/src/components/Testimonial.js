import React from 'react';

const Testimonial = ({image, quote, name, position}) => {

  return (
    <div className="testimonial">

      <div className="testimonial__user">
        <div className="image-container avatar-image">
          <img src={image} alt=""/>
        </div>
        <div className="testimonial__user-info small">{name}<br></br>{position}</div>
      </div>

      <div className="testimonial__story">
        <p className="italic">{quote}</p>
      </div>

    </div>
  )
};

export default Testimonial;

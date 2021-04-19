import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrum = ({ parent, current }) => {
  return (
    <>
      <small className="small breadcrum"><Link to="/curso">{parent} /</Link> <span className="bold">{current}</span></small>
    </>
  );
};

export default Breadcrum;
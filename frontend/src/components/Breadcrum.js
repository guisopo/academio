import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrum = ({parent, child}) => {
  return (
    <>
      <small className="small breadcrum"><Link to="/curso">{parent} /</Link> <span className="bold">{child}</span></small>
    </>
  );
};

export default Breadcrum;
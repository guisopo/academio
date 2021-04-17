import React from 'react';

const NavLink = ({ label }) => {
  console.log(label);
  return (
    // <Link to={`/login}`}>
      <li>{label}</li>
    // </Link>
  );
};

export default NavLink;
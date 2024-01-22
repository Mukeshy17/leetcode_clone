// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Discuss = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active">
            Services
          </NavLink>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Discuss;

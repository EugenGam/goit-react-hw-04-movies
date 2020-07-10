import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        className="navigationLink"
        activeClassName="active-link"
        to={routes.HOME}
        exact
      >
        Home
      </NavLink>
      <NavLink
        className="navigationLink"
        activeClassName="active-link"
        to={routes.MOVIESEARCH}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;

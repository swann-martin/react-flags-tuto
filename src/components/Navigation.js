import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="a-propos" activeClassName="nav-active">
        A propos
      </NavLink>
    </nav>
  );
};

export default Navigation;

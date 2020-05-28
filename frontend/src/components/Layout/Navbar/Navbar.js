import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => (
  <div className="nav">
    <div className="logo">Ar</div>

    <ul className="navItems">
      <NavLink to="/animes" className="navItem" activeClassName="active">
        Meine Liste
      </NavLink>
      <NavLink to="/animes/add" className="navItem" activeClassName="active">
        Animes hinzufügen
      </NavLink>
      <NavLink to="/information" className="navItem" activeClassName="active">
        Information
      </NavLink>
    </ul>
  </div>
);

export default Navbar;

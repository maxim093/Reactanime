import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  let show = false;

  const burgerMenuHandler = () => {
    show === false ? createBurgerMenuCon() : removeBurgerMenuCon();
  };

  const removeBurgerMenuCon = () => {
    // delete container for navigation links on mobile devices
    const burgerMenuCon = document.querySelector(".burgerMenuCon");
    console.log(burgerMenuCon);
    burgerMenuCon.remove();
    show = false;
  };

  const createBurgerMenuCon = () => {
    // create dontainer for navigation links on mobile devices
    const navBar = document.querySelector(".nav");
    navBar.appendChild(document.createElement("div")).className =
      "burgerMenuCon";

    if (show === true) {
      removeBurgerMenuCon();
    } else {
      // move burgerMenu icon behind the navigation cContainer
      document
        .querySelector(".burgerMenuCon")
        .insertAdjacentElement(
          "afterend",
          document.querySelector(".burgerMenu")
        );
    }
    show = true;
  };

  return (
    <div className="nav">
      <NavLink to="/animes" className="logo">
        Ar
      </NavLink>
      <div onClick={burgerMenuHandler} className="burgerMenu">
        <i className=" fas fa-bars fa-2x"></i>
      </div>
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
};

export default Navbar;

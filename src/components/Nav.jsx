import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo.svg";

const Nav = (props) => {
  return (
    <nav>
      <img src={Logo} alt="logo" className="logo" />
      <div className="links">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/pizza">
          Order
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import ColorButton from "./Button";

const Nav = () => {
  return (
    <nav>
      <div></div>
      <div className="menu">
        <NavLink to="/">
          <img
            src="/img/representative_image.jpg"
            alt="Logo"
            className="logo-image"
          />
        </NavLink>
      </div>
      <div className="login-button">
        <NavLink to="/login">
          <ColorButton text={"login"} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

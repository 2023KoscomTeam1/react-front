import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import ColorButton from "./Button";
import { FaBars } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';

const Nav = () => {
  return (
    <nav>
      <div></div>
      <div className="menu">
        <NavLink to="/">
          <img
            src="/img/kake-logo-007.jpg"
            alt="Logo"
            className="logo-image"
          />
        </NavLink>
      </div>
      <div className="nav-item" >
        <p> 님</p>
      </div>
      <div className='nav-item'>
          <i><BsPersonCircle/></i>
      </div>
      <div className="login-button">
        <NavLink to="/login">
          <ColorButton text={"login"} />
        </NavLink>
      </div>
      <div className='nav-item'>
          <i><FaBars /></i>
      </div>
    </nav>
  );
};

export default Nav;

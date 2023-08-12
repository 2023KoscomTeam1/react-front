import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import ColorButton from "./Button";

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/recommend">Recommend</NavLink>
      </div>
      <div>
        <NavLink to="/search">Search</NavLink>
      </div>
      <div>
        <NavLink to="/mypage">MyPage</NavLink>
      </div>
      <ColorButton text={"login"} />
    </nav>
  );
};

export default Nav;

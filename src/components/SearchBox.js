import React from "react";
import "../App.css";
import { BsSearch } from "react-icons/bs";

const Nav = ({text}) => {
  return (
    <div className="custom-box">
        <input placeholder={text} className="search-input"></input>
        <BsSearch className="search-icon"/>
    </div>
  );
};

export default Nav;

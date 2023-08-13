import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import ColorButton from "./Button";
import { FaBars } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

const Nav = () => {
  return (
    <nav>
      <div>
        <div className="menu">
          <NavLink to="/">
            <img
              src="/img/kake-logo-007.jpg"
              alt="Logo"
              className="logo-image"
            />
          </NavLink>
        </div>
      </div>
      <div className="login-module">
        <div className="login-button">
          {/* 우측 상단에 마이페이지 버튼과 로그인 버튼 */}

          <div className="nav-module">
            {/* TODO:아래에 {user_id} 받도록 변경 */}
            <Link to="/user/1">
              <BsPersonCircle />
            </Link>
          </div>
          <div className="nav-module">
            <p> 님</p>
          </div>
          <div className="nav-module">
            {/* TODO:로그인시만 로그인 노출, 이외의 경우 마이페이지로 노출하도록 변경 */}
            <Link to="/login">
              <ColorButton text={"로그인"} size={10} />
            </Link>
          </div>
          <div className="nav-module">
            <FaBars />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

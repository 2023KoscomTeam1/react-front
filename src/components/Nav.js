import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import ColorButton from "./Button";
import { FaBars } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { useIsAuthenticated, useSignOut, withAuthUser } from "react-auth-kit";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const Nav = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const login = () => {
    navigate("/login");
  };
  const logout = () => {
    signOut();
    navigate("/login");
  };
  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    console.log(cookies.get("id"));
    console.log("this is _auth", cookies.cookies._auth);
    if (isAuthenticated()) {
      // Redirect to Dashboard
      console.log("logged in");
      setUser(cookies.cookies._auth);
    } else {
      // Redirect to Login
      console.log("logged out");
    }
  });
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
        {isAuthenticated() ? (
          <div className="login-button">
            {/* 우측 상단에 마이페이지 버튼과 로그인 버튼 */}
            <div className="nav-module">
              {/* TODO:아래에 {user_id} 받도록 변경 */}
              <Link to={`/user/${user}`}>
                <BsPersonCircle />
              </Link>
            </div>

            {user && (
              <div className="nav-module">
                <p>{user} 님</p>
              </div>
            )}
            <div className="nav-module">
              <ColorButton text={"로그아웃"} size={10} f={logout} />
            </div>
          </div>
        ) : (
          <div className="login-button">
            <div className="nav-module">
              {/* TODO:로그인시만 로그인 노출, 이외의 경우 마이페이지로 노출하도록 변경 */}
              <Link to="/login">
                <ColorButton text={"로그인"} size={10} />
              </Link>
            </div>
          </div>
        )}

        <div className="nav-module">
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

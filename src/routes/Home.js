import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";
import ColorButton from "../components/Button";
function Home() {
  return (
    <div className="company-container">
      {/* 좌측 상단에 로고 이미지 */}
      <img src="/img/logo.png" alt="Company Logo" className="logo-image" />

      {/* 우측 상단에 마이페이지 버튼과 로그인 버튼 */}
      <div className="right-menu">
        <Link to="/company/portfolio">
          <ColorButton text={"마이페이지"} size={10} />
        </Link>
        <Link to="/login">
          <ColorButton text={"로그인"} size={10} />
        </Link>
      </div>

      {/* 배너 컨테이너 */}
      <div className="banner-container">
        <div className="banner-wrapper">
          {/* 여러 개의 배너 이미지를 반복하여 표시 */}
          <img src="/img/banner1.png" alt="Banner 1" className="banner-image" />
          <img src="/img/banner2.png" alt="Banner 2" className="banner-image" />
          <img src="/img/banner3.png" alt="Banner 3" className="banner-image" />
          <img src="/img/banner4.png" alt="Banner 4" className="banner-image" />
          <img src="/img/banner5.png" alt="Banner 5" className="banner-image" />
        </div>
      </div>

      {/* "내 자산 등록하기" 버튼 */}
      <div className="register-button">
        <Link to="/company/EPortfolio">
          <ColorButton text={"내 자산 등록하기"} size={25} />
        </Link>
      </div>
    </div>
  );
}
export default Home;

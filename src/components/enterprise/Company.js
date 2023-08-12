import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import "./Company.css";

function Company() {
  return (
    <div className="company-container">
      {/* 좌측 상단에 로고 이미지 */}
      <img src="/img/logo.png" alt="Company Logo" className="logo-image" />

      {/* 우측 상단에 마이페이지 버튼과 로그인 버튼 */}
      <div className="right-menu">
        <div className="menu-item">
          <Link to="/company/EPortfolio">마이페이지</Link>
        </div>
        <div className="menu-item">
          <Link to="/login">로그인</Link>
        </div>
      </div>

      {/* 배너 컨테이너 */}
      <div className="banner-container">
        <div className="banner-wrapper">
          {/* 여러 개의 배너 이미지를 반복하여 표시 */}
          <img src="/img/banner1.jpg" alt="Banner 1" className="banner-image" />
          <img src="/img/banner2.jpg" alt="Banner 2" className="banner-image" />
          <img src="/img/banner3.jpg" alt="Banner 3" className="banner-image" />
          <img src="/img/banner4.jpg" alt="Banner 4" className="banner-image" />
          <img src="/img/banner5.jpg" alt="Banner 5" className="banner-image" />
        </div>
      </div>

      {/* "내 자산 등록하기" 버튼 */}
      <div className="register-button">
        <Link to="/company/EPortfolio">내 자산 등록하기</Link>
      </div>

    </div>
  );
}

export default Company;

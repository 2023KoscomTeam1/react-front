import React from "react";
import "./Portfolio.css";

function EPortfolio() {
  return (
    <div className="eportfolio-container">
      <div className="left-content">
        <div className="menu-section">
          <button className="menu-item">심사신청</button>
          <div className="submenu">
            <button className="submenu-item">신규신청</button>
            <button className="submenu-item">심사확인</button>
          </div>
        </div>
        <div className="menu-section">
          <button className="menu-item">투자확인</button>
          <div className="submenu">
            <button className="submenu-item">투자 진행</button>
            <button className="submenu-item">투자 완료</button>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="image-description">
          <h3>대표 이미지</h3>
          <p>이미지에 대한 자세한 설명을 여기에 추가합니다.</p>
        </div>
        <img
          src="/img/cafe1.jpg"
          alt="Representative"
          className="representative-image"
        />
        <div className="basic-info">
          <p>이름: 홍길동</p>
          <p>나이: 30세</p>
          <p>직업: 개발자</p>
        </div>
      </div>
    </div>
  );
}

export default EPortfolio;

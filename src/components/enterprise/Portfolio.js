import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import Sidebar  from "../Sidebar";
function EPortfolio() {
  return (
    <div className="eportfolio-container">
      <Sidebar>ddd</Sidebar>
      
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
          <p>자산명: 더에스에스타운</p>
          <p>주소: 서울특별시 강서구 강서로 33가길 4</p>
          <p>유형: 상가</p>
        </div>
      </div>
    </div>
  );
}

export default EPortfolio;

import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import React from "react";
import "./Home.css";
import ColorButton from "../components/Button";
import Nav from "../components/Nav";


function Home() {
  return (
    <div>
      <Nav />
      <div className="default-frame">
        <div className="company-container">
          <img src="/img/home/001.png" alt="home 1" className="home-image" />
          <div className="register-button" style={{marginTop:"-100px"}}>
            <Link to="/assets">
              <ColorButton text={"투자하러하기"} size={5} />
            </Link>
          </div>
          <img src="/img/home/intro_bold.png" alt="home 5" className="home-image" />
          <img src="/img/home/002.png" alt="home 3" className="home-image" />
          {/* "내 자산 등록하기" 버튼 */}
          <div className="register-button">
            <Link to="/company/portfolio">
              <ColorButton text={"내 자산 확인하기"} size={5} />
            </Link>
          </div>
          <img src="/img/home/home_txt.png" alt="home 5" className="home-image" />
          <img src="/img/home/004.png" alt="home 3" className="home-image" />


          <hr />
          {/* 배너 컨테이너 */}
          <div className="banner-container">

            <span className="banner-title">우리 동네 소식</span>
            <div className="banner-wrapper">
              {/* 여러 개의 배너 이미지를 반복하여 표시 */}
              <img src="/img/banner1.png" alt="Banner 1" className="banner-image" />
              <img src="/img/banner2.png" alt="Banner 2" className="banner-image" />
              <img src="/img/banner3.png" alt="Banner 3" className="banner-image" />
              <img src="/img/banner4.png" alt="Banner 4" className="banner-image" />
              <img src="/img/banner5.png" alt="Banner 5" className="banner-image" />
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}
export default Home;
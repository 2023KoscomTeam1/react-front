import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import React, { useState } from "react";
import "./Home.css";
import ColorButton from "../components/Button";
import Nav from "../components/Nav";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Home() {
  const slides = [{ url: "/img/home/001.png" }, { url: "/img/home/002.png" }];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <Nav />
      {/* <div className="default-frame">
        <div className="max-w-full h-full w-full m-auto py-16 px-4 relative">
          <div
            style={{ backgroundImage: `url(${slides[1].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
        </div>
      </div> */}
      <div className="default-frame">
        {/* Left Arrow */}
        <div className="chevron">
          <div
            className="group-hover:block absolute top-[12%] -translate-x-0 translate-y-[-10%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            style={{ margin: "80px" }}
          >
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
        </div>
        {/* Right Arrow */}
        <div
          className="group-hover:block absolute top-[12%] -translate-x-0 translate-y-[-10%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          style={{ margin: "80px" }}
        >
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        {/* <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div> */}
      </div>
      <div className="default-frame">
        <div className="company-container">
          {currentIndex === 0 && (
            <div>
              <img
                src="/img/home/001.png"
                alt="home 1"
                className="home-image"
              />
              <div className="register-button" style={{ marginTop: "-100px" }}>
                <Link to="/assets">
                  <ColorButton text={"투자하러하기"} size={5} />
                </Link>
              </div>
              <img
                src="/img/home/intro_bold.png"
                alt="home 5"
                className="home-image"
              />
            </div>
          )}
          {currentIndex === 1 && (
            <div>
              <img
                src="/img/home/002.png"
                alt="home 3"
                className="home-image"
              />
              <div className="register-button">
                <Link to="/company/portfolio">
                  <ColorButton text={"내 자산 확인하기"} size={5} />
                </Link>
              </div>
              <img
                src="/img/home/home_txt.png"
                alt="home 5"
                className="home-image"
              />
            </div>
          )}
        </div>
      </div>
      <div className="default-frame">
        <div className="company-container">
          <img src="/img/home/004.png" alt="home 3" className="home-image" />

          <hr />
          {/* 배너 컨테이너 */}
          <div className="banner-container">
            <span className="banner-title">우리 동네 소식</span>
            <div className="banner-wrapper">
              {/* 여러 개의 배너 이미지를 반복하여 표시 */}
              <img
                src="/img/banner1.png"
                alt="Banner 1"
                className="banner-image"
              />
              <img
                src="/img/banner2.png"
                alt="Banner 2"
                className="banner-image"
              />
              <img
                src="/img/banner3.png"
                alt="Banner 3"
                className="banner-image"
              />
              <img
                src="/img/banner4.png"
                alt="Banner 4"
                className="banner-image"
              />
              <img
                src="/img/banner5.png"
                alt="Banner 5"
                className="banner-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

import "./Home.css";
import React, { useRef } from "react";
import profile from "../../assets/img.jpg";
import { BiChevronRight, BiSearch, BiSearchAlt } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";

import home_background from "../../assets/avatar.jpg";
import _2 from "../../assets/back.webp";
import _3 from "../../assets/3.jpg";
import _4 from "../../assets/4.jpg";
import _5 from "../../assets/5.jpg";
import _6 from "../../assets/6.jpg";
import _7 from "../../assets/7.jpg";
import _8 from "../../assets/8.jpg";
import _9 from "../../assets/9.jpg";
import _10 from "../../assets/10.jpg";
import _11 from "../../assets/11.jpg";
import _12 from "../../assets/12.jpg";
import _13 from "../../assets/13.jpg";
import _14 from "../../assets/14.webp";
import _15 from "../../assets/15.webp";
import _16 from "../../assets/16.webp";
import _17 from "../../assets/17.webp";
import _18 from "../../assets/18.webp";
import _19 from "../../assets/19.jpg";
import _20 from "../../assets/20.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import my_image_1 from "../../assets/supergirl-banner.jpg";
import pos1 from "../../assets/home-background.png";
import profilePicture from "../../assets/img.jpg";
/**
 * logo -> alt_logo
 *
 */

export const Home = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let _media = windowSize.current[0];
  console.log(`width: ${_media}`);
  let _view = 6;
  if (_media == 1366) {
    _view = 4;
  } else if (_media <= 1167) {
    _view = 4;
  } else if (_media <= 973) {
    _view = 3;
  } else if (_media <= 785) {
    _view = 2;
  } else if (_media <= 527) {
    _view = 1;
  }
  // react-router-dom
  const trend = () => {
    localStorage.setItem("NewData", JSON.stringify({}));
    window.location.reload();
  };

  return (
    <>
      <div className="hackWrap">
        {/* Header Part */}
        <header>
          <input type="checkbox" name="" id="chk1" />
          <div className="_logo">
            <h1 className="codex">Codex</h1>
          </div>
          <div className="search-box">
            <form action="">
              <input
                type="text"
                name="search"
                id="srch"
                placeholder="search"
                autoComplete="off"
              />
              <button type="submit" className="__hovv">
                <i>
                  <BiSearch />
                </i>
              </button>
            </form>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a onClick={trend}>Trending</a>
            </li>
            <li>
              <a href="" onClick={trend}>New Releases</a>
            </li>
            <li>
              <a href="" onClick={trend}>Favourite</a>
            </li>
            <div>
              <a href="#" className="img_logo">
                <img src={require("../../assets/login.png")} alt="" className="loginnnn" />
              </a>
            </div>
          </ul>
          <div className="menu">
            <label htmlFor="chk1">
              <i className="_menuu">
                <CgMenuGridO />
              </i>
            </label>
          </div>
        </header>
        <div className="container">
          <div className="content-container">
            <div className="_ffeatured-content">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="featured-content f1">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content f2">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content f3">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content f4">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="movie-list-container smpuu">
              <h1 className="movie-list-title tabu">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={home_background}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_2}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_3}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_4}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_5}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_6}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_7}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_8}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_9}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_10}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_11}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="movie-list-container">
              <h1 className="movie-list-title danush">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/101.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/100.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/102.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/104.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/105.jpeg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/106.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/108.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/109.jpeg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/110.jpeg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/111.jpeg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/7.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/back.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="movie-list-container">
              <h1 className="movie-list-title danush">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/30.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/31.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/32.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/33.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/335.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/34.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/1.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/10.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/100.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/3.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/4.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/home-background.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container kicc">
          <div className="content-container">
            <div className="_ffeatured-content">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="featured-content d1">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content d2">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content d3">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content d4">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="movie-list-container">
              <h1 className="movie-list-title">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_12}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_13}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_14}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_15}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_16}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_17}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_18}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_19}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={_20}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/back.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/10.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/home-background.png')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="movie-list-container">
              <h1 className="movie-list-title danush">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/1.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/2.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/3.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/4.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/5.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/6.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/7.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/8.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/9.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/10.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/11.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/20.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="movie-list-container">
              <h1 className="movie-list-title danush">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/30.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/31.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/32.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/1.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/2.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/3.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/4.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/5.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/100.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/avatar.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/6.jpg')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={require('../../assets/103.webp')}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Movie Name</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="dtl pass">
          <div className="cosp">
            Team CODEX - IBM Internship by CSRBOX
          </div>
        </footer>
      </div>
    </>
  );
};

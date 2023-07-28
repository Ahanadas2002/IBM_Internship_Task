import React from "react";
import "./VideoPage.css";
import { BiChevronRight, BiPlay, BiSearch, BiSearchAlt, BiStar } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import profilePicture from "../../assets/img.jpg";
import my_image_1 from "../../assets/avatar.jpg";
export const VideoPage = () => {
  //   const __handleSubmit = () => {
  //     localStorage.removeItem("NewData");
  //   };
  function func() {
    localStorage.removeItem("NewData");
    window.location.reload();
  }
  const notDo = () => {};
  return (
    <>
      <div className="wrapCont">
        {/* <!-- Header --> */}
        <header className="sonata">
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
              <a onClick={func}>Home</a>
            </li>
            <li>
              <a href="#" onClick={func}>Trending</a>
            </li>
            <li>
              <a href="" onClick={func}>New Releases</a>
            </li>
            <li>
              <a href="" onClick={func}>Favourite</a>
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
        {/* Video Section*/}
        <section>
            <div className="heropage">
                <div className="inside-heropage">
                    <div className="spd">NOW STRAMING</div>
                    <div className="line1">
                        <h1 className="l22" style={{fontSize: "2rem"}}>Avatar: The Way of Water</h1>
                        <div>Action | Drama | Scifi</div>
                        <div>James Cameron</div>
                        <div>2hr 30min</div>
                        <div className="btn1" >
                            <a href="#" className="pree"><i className="cc"><BiPlay/></i>Watch</a>
                            <a href="#" className="pree nxt2"><i className="cc"><BiPlay/></i>Preview</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poster">
                <img src={my_image_1} alt="" />
            </div>
        </section>
      </div>
    </>
  );
};

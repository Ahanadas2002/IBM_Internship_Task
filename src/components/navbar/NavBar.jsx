import React from "react";

export const NavBar = () => {
  return (
    <>
      {/* <!-- Header --> */}
      <header>
        {/* <!-- Nav --> */}
        <div class="nav container">
          {/* <!-- Logo --> */}
          <a href="index.html" class="logo">
            Movie<span>Vel</span>
          </a>
          {/* <!-- Search Box --> */}
          <div class="search-box">
            <input
              type="search"
              name=""
              id="search-input"
              placeholder="Search movie"
            />
            <i class="bx bx-search"></i>
          </div>
          {/* <!-- User --> */}
          <a href="#" class="user">
            <img src="img/user.jpg" alt="" class="user-img" />
          </a>
          {/* <!-- Navbar --> */}
          <div class="navbar">
            <a href="index.html" class="nav-link nav-active">
              <i class="bx bx-home"></i>
              <span class="nav-link-title">Home</span>
            </a>
            <a href="" class="nav-link">
              <i class="bx bxs-hot"></i>
              <span class="nav-link-title">Trending</span>
            </a>
            <a href="" class="nav-link">
              <i class="bx bx-compass"></i>
              <span class="nav-link-title">Explore</span>
            </a>
            <a href="" class="nav-link">
              <i class="bx bx-tv"></i>
              <span class="nav-link-title">Movies</span>
            </a>
            <a href="" class="nav-link">
              <i class="bx bx-heart"></i>
              <span class="nav-link-title">Favourite</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

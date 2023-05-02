import React from "react";
import { Link} from "react-router-dom";
import $ from "jquery";

export default function Navbar({ clearUserData, currUser  }) {
  function setActiveNavItem(element) {
    $(".nav-link").removeClass("active");
    $(element).addClass("active");
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark shadow  bg-dark">
        <div className="container justify-content-between">
          <Link className="navbar-brand text-capitalize  col-3">
            <img
              src={require("../../img/logo.png")}
              className="w-25"
              alt="logo"
            />
            <span className="code" id="title">
              game over
            </span>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="collapsibleNavId">
            {currUser ? (
              <>
                <ul className="navbar-nav  mt-2 mt-lg-0">
                  <li className="nav-item">
                    <Link
                      onClick={(e) => {
                        setActiveNavItem(e.target);
                      }}
                      className="nav-link active"
                      aria-current="page"
                      to={"/home"}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={(e) => {
                        setActiveNavItem(e.target);
                      }}
                      className="nav-link "
                      aria-current="page"
                      to={"game/all"}
                    >
                      All
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        setActiveNavItem(e.target);
                      }}
                      className="nav-link dropdown-toggle"
                      id="dropdownId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Platforms
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      <Link className="dropdown-item " to={"game/platform/pc"}>
                        pc
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/platform/browser"}
                      >
                        browser
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        setActiveNavItem(e.target);
                      }}
                      className="nav-link dropdown-toggle"
                      id="dropdownId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      sort-by
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      <Link
                        className="dropdown-item "
                        to={"game/sort-by/release-date"}
                      >
                        release-date
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/sort-by/popularity"}
                      >
                        popularity
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/sort-by/alphabetical"}
                      >
                        alphabetical
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/sort-by/relevance"}
                      >
                        relevance
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        setActiveNavItem(e.target);
                      }}
                      className="nav-link dropdown-toggle"
                      id="dropdownId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categories
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      <Link
                        className="dropdown-item "
                        to={"game/category/racing"}
                      >
                        racing
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/category/sports"}
                      >
                        sports
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/category/social"}
                      >
                        social
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/category/shooter"}
                      >
                        shooter
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/category/open-world"}
                      >
                        open-world
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/category/zombie"}
                      >
                        zombie
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/category/fantasy"}
                      >
                        fantasy
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/category/action-rpg"}
                      >
                        action-rpg
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/category/action"}
                      >
                        action
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/category/flight"}
                      >
                        flight
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={"game/category/battle-royale"}
                      >
                        battle-royale
                      </Link>
                    </div>
                  </li>
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>

          <div className="forUser">
            {currUser ? (
              <>
                <button
                  className="btn btn-outline-primary text-capitalize"
                  onClick={clearUserData}
                >
                  log out
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-primary text-capitalize me-3" to={'/login'}>
                  log in
                </Link>
                <Link className="btn btn-outline-primary text-capitalize" to={'/register'}>
                  register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

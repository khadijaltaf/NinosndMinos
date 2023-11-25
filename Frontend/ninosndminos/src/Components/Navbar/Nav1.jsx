import React from "react";
// import './Nav1.js'
import "./Nav1.css";
import logo from "../../assets/blacklogo.png";
import { Link } from "react-router-dom";

const Nav1 = () => {
  return (
    <>
      <nav>
        <section>
          <div class="top-bar">
            <button
              class="top-bar__nav-toggle hamburger"
              id="top-nav-toggle"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <a href="#" class="top-bar__brand">
              <img src={logo} alt="" />
            </a>
            <div class="top-bar__contact">
              <a href="#">Search</a>
              <a href="#">Login</a>
            </div>

            <nav class="top-bar__nav collapsed" id="top-bar__nav">
              <div
                class="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div class="offcanvas-header">
                  <h5
                    class="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    <img src={logo} alt="" />
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <p>
                    Try scrolling the rest of the page to see this option in
                    action.
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Nav1;

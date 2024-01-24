import React from "react";
// import './Nav1.js'
import "./Nav1.css";
import logo from "../../assets/blacklogo.png";
import { Link } from "react-router-dom";

const Nav1 = () => {
  return (
    <>
      <nav className="sticky-top">
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
              <a > <Link to='/search'> Search </Link></a>
              <a> <Link to='/login'>Login</Link></a>
              <a> <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link></a>
            </div>

            <nav class="top-bar__nav collapsed bars" id="top-bar__nav">
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
                    // aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body sizes">
                  <br />
                  <p>
                    <a href="">
                      <Link to="/">
                        <b>Home</b>
                        <br />
                      </Link>
                    </a>
                    <br />
                    <a>
                      <Link to="/boys-section">
                        <b>Boys </b>
                        <br />

                      </Link>
                    </a>
                    <br />
                    <a>
                      <Link to='/girls-section'>
                      <b>Girls</b>
                      <br />

                      </Link>
                    </a>
                    <br />
                    <a href="">
                      <b>Size Guide</b>
                      <br />

                    </a>
                    <br />
                    <a href="">
                      <Link to="/login">
                        <b>Login/SignUp</b>
                        <br />

                      </Link>
                    </a>
                   <br />
                    <hr />
                    <br />
                    <Link to="/faq">
                      <b>Help</b> <br />


                    </Link>{" "}
                    <br />
                    <Link to="/terms">
                      <b>Terms and Conditions</b>
                      <br />

                    </Link>{" "}
                    <br />
                    <Link to="/about">
                      <b>About</b>
                    </Link>
<br /><br />
                   
                    <Link to="/policy">
                      <b>Return And Exchange Policy</b>
                    </Link>
                  </p>
                </div>
              </div>
            </nav>
            {/* <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-sm leading-6 text-gray-900">
                <strong className="font-semibold">GeneriCon 2023</strong>
                <svg
                  viewBox="0 0 2 2"
                  className="mx-2 inline h-0.5 w-0.5 fill-current"
                  aria-hidden="true"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                Join us in Denver from June 7 – 9 to see what’s coming next.
              </p>
              <a
                href="#"
                className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Register now <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}


          </div>
        </section>
      </nav>
      
    </>
  );
};

export default Nav1;

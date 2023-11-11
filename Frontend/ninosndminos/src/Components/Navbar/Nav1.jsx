import React from "react";
// import './Nav1.js'
import "./Nav1.css";
import logo from "../../assets/blacklogo.png";

const Nav1 = () => {
  return (
    <>
    <nav className="sticky-top nav__side ">
      <section class=" ">
        <div class="nav2">
          <div class="menu showbtn">
            <button
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i class="fa-solid fa-bars"></i>{" "}
            </button>
            
          </div>
          <a href="#">
              <img src={logo} alt="" className="size" />
            </a>
          <div >
            <ul>
              <li>
                <a href="#" className="topnav-right">Search</a>
              </li>
              <li>
                <a href="#" className="topnav-right">Login</a>
              </li>
              <li>
                <a href="#" className="topnav-right">
                <i class="fa-solid fa-briefcase"></i>
                </a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Today's Deal</a>
              </li>
              <li>
                <a href="#">Mobiles</a>
              </li>
              
            
            </ul>
          </div>
        </div>
        <div class="sidebar" id="sidemenu">
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasLeftLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasLeftLabel">
                <img src={logo} alt="" className="img" />
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
             
              <ul>
                <li>
                  <div class="title">Trending</div>
                </li>
                <li>
                  <a href="#">Best Seller</a>
                </li>
                <li>
                  <a href="#">New Release</a>
                </li>
                <li>
                  <a href="#">Movers and Shakers</a>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <div class="title">Digital contetn And Divices</div>
                </li>
                <li>
                  <a href="#">Best Seller</a>
                </li>
                <li>
                  <a href="#">New Release</a>
                </li>
                <li>
                  <a href="#">Movers and Shakers</a>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <div class="title">Shop by category</div>
                </li>
                <li>
                  <a href="#">Best Seller</a>
                </li>
                <li>
                  <a href="#">New Release</a>
                </li>
                <li>
                  <a href="#">Movers and Shakers</a>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <div class="title">Programs & Features</div>
                </li>
                <li>
                  <a href="#">Best Seller</a>
                </li>
                <li>
                  <a href="#">New Release</a>
                </li>
                <li>
                  <a href="#">Movers and Shakers</a>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <div class="title">Help & settings</div>
                </li>
                <li>
                  <a href="#">Best Seller</a>
                </li>
                <li>
                  <a href="#">New Release</a>
                </li>
                <li>
                  <a href="#">Movers and Shakers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </nav>
    </>
  );
};

export default Nav1;

import React from "react";
import "./Footer.css";
import logo from "../../assets/blacklogo.png";
import { Link } from "react-router-dom";
import visa from "../../assets/visa.png";
import master from "../../assets/ms.png";

const Footer = () => {
  return (
    <>
     <div className="footer p-4 sm:p-8 md:p-12">
  <center>
    <div className="news text-lg sm:text-xl md:text-2xl">
      GET AT THE FOREFRONT OF THE TREND
    </div>

    <div className="flex items-center justify-center mt-4 sm:mt-8 md:mt-12">
      <div className="relative w-full sm:w-2/3 md:w-1/2">
        <input
          id="username"
          name="username"
          type="text"
          className="ppe1 border-b border-gray-300 py-1 px-2 focus:border-b-2 focus:border-black-700 transition-colors focus:outline-none peer bg-inherit text-center w-full"
        />
        <label
          htmlFor="username"
          className="text-center absolute left-2 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-black-700"
        >
          Enter Your Email
        </label>
      </div>
    </div>
  </center>
</div>



      <footer class="footer-1 bg-black text-white py-8 sm:py-12">
        <div class="container mx-auto px-4">
          <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div class="px-4 sm:w-1/2 md:w-1/3 xl:w-1/3">
              <h5 class="w-50 mb-4 p-0">
                <img src={logo} alt="" />
              </h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <li className="mb-2">Can We Help?</li> <br />
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <li className="mb-2">Send Email</li>
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <li>ninosandminos@ninos.com</li>
                  </a>
                </li>
              </ul>
            </div>

            <div class="px-4 sm:w-1/2 md:w-1/3 xl:w-1/3 mt-8 md:mt-0">
              <h5 class="text-xl font-bold mb-6">Help</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <li className="mb-2">
                      <Link to="/faqs">FAQs</Link>
                    </li>
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <li className="mb-2">
                      <Link to="/login">LOGIN/SIGNUP</Link>
                    </li>
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <li className="mb-2">
                      <Link to="/exchange-return">Exchange and Return</Link>
                    </li>
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <a class="mb-4">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <a className="mb-4">
                      <Link to="/about">About NINOS AND MINOS</Link>
                    </a>
                  </a>
                </a>

              <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">
                PAYMENT METHOD
              </h5>
              <div class="flex sm:justify-center xl:justify-start">
                <a href="" class="w-10 h-10 gap-2 ">
                  <img src={visa} alt="" className="imgs11" />
                </a>

                <a href="" class="w-10 h-10 ">
                  <img src={master} alt="" className="imgs11" />
                </a>
              </div>
            </div>
          </div>

          <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
            {/* Copyright Section */}
            <div className="text-center">
              <p>
                &copy; 2023, NINOS AND MINOS. All rights reserved /{" "}
                <Link to="/terms">Terms and Conditions</Link> /{" "}
                <Link to="/privacy">Privacy policy</Link>
              </p>
            </div>{" "}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

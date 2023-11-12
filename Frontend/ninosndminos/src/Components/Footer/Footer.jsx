import React from "react";
import "./Footer.css";
import logo from "../../assets/blacklogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <center>
          <div className="news">GET AT THE FORFRONT OF THE TREND</div>

          <div class="flex items-center justify-center ppe">
            <div className="relative">
              <input
                id="username"
                name="username"
                type="text"
                className=" ppe1 border-b border-gray-300 py-1 focus:border-b-2 focus:border-black-700 transition-colors focus:outline-none peer bg-inherit text-center"
              />
              <label
                htmlFor="username"
                className="text-center absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-black-700"
              >
                Enter Your Email
              </label>
            </div>
          </div>
        </center>
      </div>

      <footer className="bg-black text-white py-6">
        <div className="container mx-auto flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <img src={logo} alt="" className="mb-4 md:mb-0" />
            <ul>
              <li className="mb-2">Can We Help?</li> <br /><br />
              <li className="mb-2">Send Email</li>
              <li>ninosandminos@ninos.com</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <ul>
              <li className="mb-2">
                <Link to="/">Help</Link>
              </li><br /><br />
              <li className="mb-2">
                <Link to="/faqs">FAQs</Link>
              </li>
              <li className="mb-2">
                <Link to="/login">LOGIN/SIGNUP</Link>
              </li>
              <li className="mb-2">
                <Link to="/exchange-return">Exchange and Return</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <ul>
              <li className="mb-2">ABOUT NINOS AND MINOS</li>
              <li className="mb-2">Payment Method</li>
              {/* Add your payment method images if needed */}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center">
          <p>
            &copy; 2023, NINOS AND MINOS. All rights reserved /{" "}
            <Link to="/terms">Terms and Conditions</Link> /{" "}
            <Link to="/privacy">Privacy policy</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

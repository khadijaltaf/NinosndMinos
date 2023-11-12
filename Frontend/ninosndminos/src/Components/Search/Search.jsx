import React from "react";
import Nav1 from "../Navbar/Nav1.jsx";
import Footer from "../Footer/Footer.jsx";
import "./search.css";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <Nav1 />
      <div>
        <hr />
        <div id="nav" className="urs">
          <li>
            <p><Link> Men </Link></p>
          </li>
          <li>
            <p> <Link>Women</Link> </p>
          </li>
          <li>
            <p><Link> Kids</Link> </p>
          </li>
        </div>
        <hr />
      </div>
      <div className="search">
        <center>
          <div className="news">Search The latest trend</div>

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
                Search anything
              </label>
            </div>
          </div>
        </center>
      </div>
      <Footer />
    </div>
  );
};

export default Search;

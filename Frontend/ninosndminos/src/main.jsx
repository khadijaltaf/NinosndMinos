import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./Components/Navbar/Nav1.jsx";
import Home from "./Components/HomePage/Homepage.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Login from "./Components/Login/Login.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Cart from './Components/Cart/Cart.jsx';
import Search from './Components/Search/Search.jsx';
import "./index.css";

const routes = createBrowserRouter([
  {
    path: "/",
    // element: <Nav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/",
      //   element: <Footer />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   // path: "/",
      //   element: <Signup />,
      // },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

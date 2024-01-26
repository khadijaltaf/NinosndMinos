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
import About from "./Components/About/About.jsx";
import Boys from "./Components/Boys/Boys.jsx";
import Girls from "./Components/Girls/Girls.jsx";
import Faq from "./Components/FAQ/Faq.jsx";
import Terms from "./Components/Terms/Terms.jsx";
import Policy from "./Components/Policy/Policy.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";
import Addbtn from "./Components/Addbtn/Addbtn.jsx";
import MD344448 from './Components/AdminPanel/Admin.jsx'

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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/boys-section",
        element: <Boys />,
      },
      {
        path: "/girls-section",
        element: <Girls />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/policy",
        element: <Policy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/addbtn",
        element: <Addbtn />,
      },
      {
        path: '/MD344448',
        element: <MD344448 />,
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

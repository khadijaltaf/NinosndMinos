
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './Components/Navbar/Nav.jsx';
import Home from './Components/HomePage/Homepage.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Login from './Components/Login/Login.jsx'
import Profile from './Components/Profile/Profile.jsx';
import Signup from './Components/Signup/Signup.jsx'




const routes = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/',
        element: <Footer />,
      },
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/',
        element: <Signup />,
      },
      {
        path: '/',
        element: <Profile />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

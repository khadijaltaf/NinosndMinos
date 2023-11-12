// // import React, { useEffect } from "react";
// import React from 'react';
// import fullpage from "fullpage.js";
// import Nav1 from "../Navbar/Nav1.jsx";
// import "./Homepage.css";

// const Homepage = () => {
 
//   return (
//     <>
//       <Nav1 />
//       <div className='container1'>
//         <div>first</div>
//         <div>2nd</div>
//         <div>3rd</div>
//         <div>4th</div>
//         <div>5th</div>
//       </div>
//     </>
//   );
// };

// export default Homepage;


import React from 'react';
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation}  from '@ap.cx/react-fullpage';
import "./Homepage.css";
import Nav1 from "../Navbar/Nav1.jsx";
import Footer from '../Footer/Footer.jsx'

const Homepage = () => {
  return (
    <>
    <Nav1 />
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection className='screen1'>
          <h1>screen1</h1>
        </FullpageSection>

        <FullpageSection className='screen2'>
          <h1>screen2</h1>
        </FullpageSection>

        <FullpageSection className='screen3'>
          <h1>screen3</h1>
        </FullpageSection>

        <FullpageSection className='screen4'>
          <h1>screen4</h1>
        </FullpageSection>

        <FullpageSection className='screens'>
          <h1><Footer /></h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>

    </>
  )
}

export default Homepage
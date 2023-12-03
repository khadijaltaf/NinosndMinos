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

import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import "./Homepage.css";
import Footer from "../Footer/Footer.jsx";
import Nav1 from "../Navbar/Nav1.jsx";
// import NavB from '../NavBottom/NavB.jsx';

const Homepage = () => {
  return (
    <>
      
<Nav1/>
<Fullpage>
  <FullpageNavigation/>
  
  <FullPageSections>
    <section id="sec1">
      <FullpageSection className="screen1">

      </FullpageSection>
    </section>
    <section id="sec2">
      <FullpageSection className="screen2">
        
      </FullpageSection>
    </section>
    <section id="sec3">
      <FullpageSection className="screen3">
        
      </FullpageSection>
    </section>
    
    <section>
      <FullpageSection >
        <Footer />
      </FullpageSection>
    </section>
  </FullPageSections>

</Fullpage>
      {/* <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <section id="sec1">
            <FullpageSection className="screen1">
              <h1>Screen01</h1>
            </FullpageSection>
          </section>

          <section id="sec2">
            <FullpageSection className="screen2">
              <h1>screen2</h1>
            </FullpageSection>
          </section>

          <section id="sec3">
            <FullpageSection className="screen3">
              <h1>screen3</h1>
            </FullpageSection>
          </section>

          

          <FullpageSection className="screens">
            <div className="gap"></div>
              
            
          </FullpageSection>
        </FullPageSections>
      </Fullpage> */}
    </>
  );
};

export default Homepage;

import React from "react";
import Nav1 from "../Navbar/Nav1.jsx";
import "./About.css";
import Footer from "../Footer/Footer.jsx";
// import Contact from "../Contact/Contact.jsx";

const About = () => {
  return (
    <div>
      <Nav1 />
<center>
      <div class="sm:flex items-center max-w-screen-xl p-15 sm:p-16 md:p-24">
        <div class="sm:mr-10">
          <div class="text">
            <h2 class="font-bold text-3xl my-4 sm:text-6xl text-center">About us </h2>
            <p class="text-gray-700 text-2xl sm:text-2xl text-center">
              Ninos & Minos - We climb aboard on a whimsical journey to attire
              the spirit of childhood with exuberance and affluence. Founded
              with a passion for crafting more than just clothes, we are
              storytellers, contriving tales of adventure, affluence, and
              fearless creativity. Each stitch is a brushstroke on the canvas of
              childhood, inviting kids to paint their world with the hues of
              their dreams. Join us on this alluring journey, where clothing
              becomes a portal to imagination, laughter becomes the best
              accessory, and each outfit is a chapter in a child's unforgettable
              story.
            </p>
          </div>
        </div>
      </div>
      </center>

      <center>
      <div class="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
        <div class="sm:w-3/3 sm:mr-10">
          <div class="text">
            <h2 class="font-bold text-3xl my-4 sm:text-6xl text-center">
              Mission Statement
            </h2>
            <p class="text-gray-700 text-2xl sm:text-2xl text-center">
              Our mission is to contrive magic into every thread, creating not
              just garments but entrance to a world where imagination knows no
              hurdles. We believe in the power of vibrant colors, soft textures,
              and playful designs that vivacity joy and meditation in every
              child. Our products are a monument to our commitment to quality
              and the conviction that every child deserves to feel remarkable,
              from the minute details to the comfort in every wear.
            </p>
          </div>
        </div>
      </div>
      </center>

      <center>
      <div class="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
        <div class="sm:w-3/3 sm:mr-10">
          <div class="text">
            <h2 class="font-bold text-3xl my-4 sm:text-6xl text-center">
              Vision Statement
            </h2>
            <p class="text-gray-700 text-2xl sm:text-2xl text-center">
              Empowering young minds via vivid, comfortable, and trend-setting
              gear, our kids' clothing business wants to inspire joy,
              confidence, and a feeling of originality, establishing a world
              where every child can express their unique personality with style
              and comfort
            </p>
          </div>
        </div>
      </div>
      </center>

      <center>
      <div class="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
        <div class="sm:w-3/3 sm:mr-10">
          <div class="text">
            <h2 class="font-bold text-3xl my-4 sm:text-6xl text-center">Values</h2>
            <p class="text-gray-700 text-2xl sm:text-2xl text-center">
              Exemplified within each apparel is our firm belief in flawless
              craftsmanship, a plush grasp of ease, and a customer service
              mindset that mimics the warmth we weave into each design –
              guaranteeing your satisfaction is as enduring as the quality of
              life we provide
            </p>
          </div>
        </div>
      </div>
      </center>

      <hr />
      {/* <Contact /> */}
      <hr />
      <Footer />
    </div>
  );
};

export default About;

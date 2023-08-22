import React from "react";
import { TypeAnimation } from "react-type-animation";
import bgvideo2 from "../assets/videos/bgvideo.mp4";
import { Icon } from "@iconify/react";
import "../components/Hero.css";
// Hero component
function Hero() {
  document.title = "IEEE WIE CRCE";
  return (
    <>
      {/* Hero container */}
      <video autoPlay muted loop className="videoBg">
        <source src={bgvideo2} type="video/mp4" />
      </video>
      <div className="heroContainer px-5">
        <span className="reveal-text text-center">
          {/* Main heading */}
          <h1 className="mainHeading ">
            IEEE WIE 
          </h1>
          {/* Sub heading */}
          <p >Coding the Future, One Line at a Time!</p>
        </span>
        {/* Content with typing animation */}
        <div className="content">
          <div>
            <Icon icon="iconamoon:send" /> {/* Typing animation */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially

                "Welcome to IEEE WIE",
                1000,
                "Welcome to IEEE WIE – Empowering Technology for a Better Tomorrow!",
                1000,
                "Welcome to IEEE WIE – Innovating for a Better Tomorrow!",
                1000,
                "Welcome to IEEE WIE – Transforming Ideas into Innovations!",
                1000,
                "Welcome to IEEE WIE – From Circuits to Cybernetics, We Do It All!",
                1000,
                "Welcome to IEEE WIE – Building Bridges with Bits and Bytes!",
                1000,
              ]}
              speed={50}
              deletionSpeed={70}
              preRenderFirstString={true}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Memoize the Hero component to optimize rendering
export default React.memo(Hero);

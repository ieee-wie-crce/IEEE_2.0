import React from "react";
import { TypeAnimation } from "react-type-animation";
import bgvideo2 from "../assets/videos/bgvideo.mp4";
import { Icon } from "@iconify/react";
import IeeeAbout from "./IeeeAbout";
import "../css/Hero.css";
import WieAbout from "./WieAbout";
// eslint-disable-next-line
import MentorAbout from "./MentorAbout";
// Hero component
function Hero() {
  document.title = "IEEE WIE CRCE";
  return (
    <>
      <div className="heroContainer snapElement">
        <video autoPlay muted loop className="videoBg">
          <source src={bgvideo2} type="video/mp4" />
        </video>
        <span className="reveal-text text-center">
          <h1 className="mainHeading ">IEEE WIE CRCE</h1>
          <p>
            Coding the Future, One Line at a Time!
            {/* <Icon icon="solar:code-2-outline" /> */}
            <Icon icon="solar:chat-square-code-bold" />
          </p>
        </span>
        <div className="content mx-3">
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
      <div className="snapElement">
        <MentorAbout />
      </div>
      <div className="snapElement">
        <IeeeAbout />
      </div>
      <div className="snapElement">
        <WieAbout />
      </div>
    </>
  );
}

// Memoize the Hero component to optimize rendering
export default React.memo(Hero);

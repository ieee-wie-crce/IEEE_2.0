import React from "react";
import { TypeAnimation } from "react-type-animation";
// import backgroundVideo from "../assets/videos/bgvideo.mp4"; /**Original BG Video */
import { Icon } from "@iconify/react";
import IeeeAbout from "./IeeeAbout";
import "../css/Hero.css";
import WieAbout from "./WieAbout";
import LordIcon from "./LordIcon";
// Hero component
function Hero(props) {
  document.title = "IEEE WIE CRCE";
  const isDesktop =
    navigator.userAgent.includes("Windows") ||
    navigator.userAgent.includes("Mac");
  return (
    <>
      <div className="heroContainer snapElement">
        {/* <video autoPlay muted loop className="videoBg">
            <source src={backgroundVideo} type="video/mp4" />
          </video> */}

        <span className="reveal-text text-center">
          <div className="fs-1">
            <LordIcon
              icon={"uvqdhrsk"}
              colors={"primary:#fff,secondary:#fff"}
              w={100}
              h={100}
              stroke={"bold"}
            />
          </div>
          <h1 className="mainHeading"> IEEE WIE CRCE</h1>
          <p>{props.text}</p>
          <p className="makeitcenter">
            Coding the Future, One Line at a Time!{" "}
          </p>
          <LordIcon
            icon={"vlycxjwx"}
            colors={"primary:#fff,secondary:#fff"}
            w={50}
            h={50}
            stroke={"bold"}
          />
        </span>
        {isDesktop ? (
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
        ) : null}
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

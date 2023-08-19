import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import backgroundPlaceholder from "../assets/placeholders/ieee-placeholder.png";
import background from "../assets/ieeeTeam.jpg";
import { Icon } from "@iconify/react";
import "../components/Hero.css";
// Hero component
function Hero() {
  document.title = "IEEE - CRCE";
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const heroBackgroundStyle = {
      background: `url(${
        imageLoaded ? background : backgroundPlaceholder
      }) center center/cover no-repeat`,
  };
  return (
    <>
      {/* Hero container */}
      <div className="heroContainer px-5" style={heroBackgroundStyle}>
        <span className="reveal-text">
          {/* Main heading */}
          <h1 className="mainHeading">
            I<span className="ieee-span">EEE</span>
          </h1>
          {/* Sub heading */}
          <p>Coding the Future, One Line at a Time!</p>
        </span>
        {/* Content with typing animation */}
        <div className="content">
          <div>
            <Icon icon="iconamoon:send" /> {/* Typing animation */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially

                "Welcome to IEEE",
                1000,
                "Welcome to IEEE – Empowering Technology for a Better Tomorrow!",
                1000,
                "Welcome to IEEE – Innovating for a Better Tomorrow!",
                1000,
                "Welcome to IEEE – Transforming Ideas into Innovations!",
                1000,
                "Welcome to IEEE – From Circuits to Cybernetics, We Do It All!",
                1000,
                "Welcome to IEEE – Building Bridges with Bits and Bytes!",
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
      <img
        src={background}
        alt="IEEE Background"
        onLoad={handleImageLoad}
        style={{ display: "none" }} // Hide the image element
      />
    </>
  );
}

// Memoize the Hero component to optimize rendering
export default React.memo(Hero);

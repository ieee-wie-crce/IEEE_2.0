import React, { useMemo } from "react";
import "../css/About.css";
import manIcon from "../assets/icons/man.png";
import bulbIcon from "../assets/icons/bulb.png";
import missionIcon from "../assets/icons/mission.png";
import Card from "./Card";
import MentorAbout from "./MentorAbout";
import LordIcon from "./LordIcon";
// Static data that doesn't change during component re-renders
const description = [
  "The Fr.CRCE Student Branch of IEEE was established in 1995 with the initiative of our Vice-Principal Prof. B. R. Prabhu.",
  "Be essential to the global technical community and be universally recognized for the contributions of technology in improving global conditions.",
  "IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.",
];

const About = () => {
  // Use useMemo to memoize the array of Card components, so it's only computed once during initial rendering
  const cards = useMemo(
    () => [
      // Card components for About section
      <Card
        key="founder"
        className="card mx-0"
        title={"About Founder"}
        description={description[0]}
        icon={manIcon}
      />,
      <Card
        key="vision"
        className="card"
        title={"Our Vision"}
        description={description[1]}
        icon={bulbIcon}
      />,
      <Card
        key="mission"
        className="card"
        title={"Our Mission"}
        description={description[2]}
        icon={missionIcon}
      />,
    ],
    []
  );
  return (
    <>
      <div className="about snapElement" id="about">
        <div className="title">
          <header className="makeitcenter">
            <LordIcon icon={"yxczfiyc"} w={50} h={50} />
            &nbsp;About Us
          </header>
          <hr className="text-white h-100" />
        </div>
        <div className="cards container-fluid d-flex align-items-center justify-content-evenly flex-wrap">
          {cards}
        </div>
      </div>
      <div className="snapElement">
        <MentorAbout />
      </div>
    </>
  );
};

export default About;

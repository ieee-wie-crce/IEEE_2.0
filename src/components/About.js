import React, { useMemo, useState, useEffect } from "react";
import "./About.css";
import manIcon from "../assets/icons/man.png";
import bulbIcon from "../assets/icons/bulb.png";
import missionIcon from "../assets/icons/mission.png";
import wieLogoPlaceholder from "../assets/placeholders/wie-placeholder.png";
import wieLogo from "../assets/wieTeam.jpg";
import Card from "./Card";
import { Icon } from "@iconify/react";

// Static data that doesn't change during component re-renders
const description = [
  "The Fr.CRCE Student Branch of IEEE was established in 1995 with the initiative of our Vice-Principal Prof. B. R. Prabhu.",
  "Be essential to the global technical community and be universally recognized for the contributions of technology in improving global conditions.",
  "IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.",
];

// Icons for WIE Vision and WIE Mission
const visionIcon = <Icon height="2rem" icon="tabler:device-vision-pro" />;
const solarIcon = <Icon height="2rem" icon="solar:transmission-broken" />;

const About = () => {
  document.title = "ABOUT IEEE & WIE";

  // State to track whether the actual image has been loaded
  const [wieLogoLoaded, setWieLogoLoaded] = useState(false);

  // Load the actual image and update state when it's loaded
  useEffect(() => {
    const image = new Image();
    image.src = wieLogo;
    image.onload = () => {
      setWieLogoLoaded(true);
    };
  }, []);

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
    [] // Empty dependency array, so it's computed only once during the initial rendering
  );
  return (
    <>
      <section>
        <div className="container-fluid about" id="about">
          <div className="title text-center">
            <h2>
              About <span>Us</span>
            </h2>
            <div className="border" />
          </div>
          <div className="cards container-fluid d-flex align-items-center justify-content-evenly flex-wrap">
            {/* Render the memoized array of Card components */}
            {cards}
          </div>
        </div>
      </section>
      <section>
        <div className="WIE_MAIN">
          <div className="WIE">
            <div className="wie_photo px-2">
              {/* Display either the actual image or the placeholder based on the loaded state */}
              <img
                src={wieLogoLoaded ? wieLogo : wieLogoPlaceholder}
                alt="WIE"
              />
              <div className="wie_title pt-5">Women In Engineering (WIE)</div>
            </div>
            <div className="wie_content">
              <div>
                <div className="wie_desc">
                  WIE-CRCE is an affinity group of IEEE which is the world’s
                  leading professional association for the advancement of
                  technology. WIE-CRCE aims to inculcate the importance and
                  advancements related to technology and social issues to women
                  to make them whole as an individual with a firm technical
                  background. This chapter organizes the talk of eminent
                  personalities from various fields to celebrate Women’s day.
                </div>
              </div>
              <div className="wie_media">
                <div className="col-md-6 mb-4 ">
                  <div className="media">
                    <div className="pull-left">{visionIcon}</div>
                    <div className="media-body">
                      <h4 className="media-heading">WIE Vision</h4>
                      <div>
                        To facilitate the recruitment and retention of women in
                        technical disciplines globally.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="media">
                    <div className="pull-left">{solarIcon}</div>
                    <div className="media-body">
                      <h4 className="media-heading">WIE Mission</h4>
                      <div>
                        To inspire, engage, encourage, and empower IEEE women
                        worldwide.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about_footer m-4">
            <div className="footer_tile">
              Leveraging Technology for a Better Tomorrow.
            </div>
            <div className="footer_desc">
              IEEE-CRCE Council organizes acitivites like technical quiz,
              workshops, session, competitions and debates. It help the students
              to become acquainted with the industry which is not provided by
              the university syllabus.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

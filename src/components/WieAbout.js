import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import wieLogoPlaceholder from "../assets/placeholders/placeholder.png";
import wieLogo from "../assets/wieTeam.jpg";
import '../css/About.css'
function WieAbout() {
  // Icons for WIE Vision and WIE Mission
  const visionIcon = <Icon height="2rem" icon="tabler:device-vision-pro" />;
  const solarIcon = <Icon height="2rem" icon="solar:transmission-broken" />;
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
  return (
    <div className="WIE_MAIN d-flex align-items-center">
      <div className="WIE">
        <div className="wie_photo px-4">
          {/* Display either the actual image or the placeholder based on the loaded state */}
          <img className="rounded-4" src={wieLogoLoaded ? wieLogo : wieLogoPlaceholder} alt="WIE" />
          <div className="wie_title pt-5">Women In Engineering (WIE)            <Icon icon="simple-line-icons:energy" />
</div>
        </div>
        <div className="wie_content">
          <div>
            <div className="wie_desc">
              WIE-CRCE is an affinity group of IEEE which is the world’s leading
              professional association for the advancement of technology.
              WIE-CRCE aims to inculcate the importance and advancements related
              to technology and social issues to women to make them whole as an
              individual with a firm technical background. This chapter
              organizes the talk of eminent personalities from various fields to
              celebrate Women’s day.
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
    </div>
  );
}
export default WieAbout;

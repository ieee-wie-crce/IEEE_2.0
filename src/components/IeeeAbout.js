import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import wieLogoPlaceholder from "../assets/placeholders/placeholder.png";
import ieeeLogo from "../assets/ieeeTeam.jpg";
import "../css/About.css";
function IeeeAbout() {
  // Icons for WIE Vision and WIE Mission
  const visionIcon = <Icon height="2rem" icon="tabler:device-vision-pro" />;
  const solarIcon = <Icon height="2rem" icon="solar:transmission-broken" />;
  // State to track whether the actual image has been loaded
  const [ieeeLogoLoaded, setIeeeLogoLoaded] = useState(false);

  // Load the actual image and update state when it's loaded
  useEffect(() => {
    const image = new Image();
    image.src = ieeeLogo;
    image.onload = () => {
      setIeeeLogoLoaded(true);
    };
  }, []);
  return (
    <div className="IEEE_MAIN d-flex align-items-center">
      <div className="WIE">
        <div className="wie_photo px-4">
          {/* Display either the actual image or the placeholder based on the loaded state */}
          <img
            className="rounded-4 w-100"
            src={ieeeLogoLoaded ? ieeeLogo : wieLogoPlaceholder}
            alt="WIE"
          />
        </div>
        <div className="wie_content">
          <div className="ieee_title pt-5 px-1">
            Institute of Electrical and Electronics Engineers (IEEE){" "}
            <Icon icon="simple-line-icons:energy" />
          </div>
          <div>
            <div className="wie_desc">
              Established in 1995, IEEE CRCE stands as one of the most venerable
              Student Chapters within the Bombay Section. With a legacy spanning
              24 years, our core objective is to equip our students with
              profound technical knowledge. Our portfolio boasts a rich tapestry
              of offerings, including national-level competitions, workshops,
              skill development programs, industrial visits, technical
              conferences, and a strong commitment to humanitarian activities.
            </div>
          </div>
          <div className="wie_media">
            <div className="mb-4 ">
              <div className="media">
                <div className="pull-left">{visionIcon}</div>
                <div className="media-body">
                  <h4 className="media-heading">IEEE Vision</h4>
                  <div>
                    Pioneering technological excellence, IEEE CRCE strives to
                    create a better world through innovation and education.
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="media">
                <div className="pull-left">{solarIcon}</div>
                <div className="media-body">
                  <h4 className="media-heading">IEEE Mission</h4>
                  <div>
                    Dedicated to bridging academia and industry, IEEE CRCE
                    empowers students with technical prowess and fosters a
                    spirit of innovation, while contributing to the greater good
                    of society.
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
export default IeeeAbout;

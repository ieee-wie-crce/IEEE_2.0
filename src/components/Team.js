import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Tilt from "react-parallax-tilt";
import ieeeIcon from "../assets/logos/ieeeIcon.svg";
import wieIcon from "../assets/logos/wieIcon.svg";
import { MEMBERS } from "./ImportData";
import memberPlaceholderImg from "../assets/placeholders/memberPlaceholder.png";
import LordIcon from "./LordIcon";
import "../css/Team.css";
const TeamMember = React.lazy(() => import("./TeamMember"));
function Team() {
  // Set the document title
  document.title = "IEEE & WIE TEAM";
  // State for managing active team card condition and image loading status
  const [teamCardsCondition, setTeamCardsCondition] = useState("IEEE");
  const [imageLoaded, setImageLoaded] = useState(false);

  // Function to handle image load event
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Function to handle team tab button click and update team condition
  const handleTeamTabBtn = (e) => {
    const menu = document.querySelectorAll(".teamLink");
    menu.forEach((tab) => tab.classList.remove("is-active"));
    e.target.classList.add("is-active");
    setTeamCardsCondition(e.target.classList.contains("IEEE") ? "IEEE" : "WIE");
  };

  // Filter team member data based on the active team condition
  const memberCards = MEMBERS.filter(
    (member) => member.team === teamCardsCondition
  );
  useEffect(() => {
    setImageLoaded(false);
  }, [teamCardsCondition]);

  return (
    <>
      <div className="team">
        {/* Display the main title */}
        <div className="mainTitle makeitcenter">
          <LordIcon icon={"vyqvtrtg"} w={50} h={50} />
          &nbsp;OUR TEAM
        </div>
        <hr className="mx-5 " />
        {/* Display the team tab buttons */}
        <div className="titleContainer py-4">
          <div className="title">
            {/* Handle click on IEEE team tab */}
            <Link
              className="teamLink IEEE is-active"
              onClick={handleTeamTabBtn}
            >
              <img src={ieeeIcon} alt="ieeeIcon" />
            </Link>
          </div>
          <div className="title">
            {/* Handle click on WIE team tab */}
            <Link className="teamLink WIE" onClick={handleTeamTabBtn}>
              <img src={wieIcon} alt="wieIcon" />
            </Link>
          </div>
        </div>
        {/* Display team members */}
        <div className="teamMembers">
          {memberCards.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              Tilt={Tilt}
              Icon={Icon}
              LordIcon={LordIcon}
              index={index}
              imageLoaded={imageLoaded}
              placeholderImg={memberPlaceholderImg}
              handleImageLoad={handleImageLoad}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default React.memo(Team);

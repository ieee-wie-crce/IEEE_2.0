import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import ieeeIcon from "../assets/logos/ieeeIcon.svg";
import wieIcon from "../assets/logos/wieIcon.svg";
import "./Team.css";
import { IEEEmembers, WIEmembers } from "./ImportData"; // Import arrays of IEEE and WIE team members
import placeholderImg from "../assets/placeholders/download.png"; // Placeholder image for unloaded images
import teamMembers from "../data/TeamData.json"; // Import data containing team member information
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

    // Update the active team card condition based on the clicked tab
    setTeamCardsCondition(e.target.classList.contains("IEEE") ? "IEEE" : "WIE");
  };

  // Filter team member data based on the active team condition
  const filteredCards = teamMembers.filter(
    (member) => member.team === teamCardsCondition
  );

  const ShowSocialLinks = () => {};
  return (
    <>
      <div className="team">
        {/* Display the main title */}
        <div className="mainTitle">
          <Icon icon="fluent:people-team-48-filled" /> OUR{" "}
          <span style={{ color: "#0d6efd6e" }}>TEAM</span>
        </div>
        <div className="border" />
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
              <img src={wieIcon} alt="ieeeIcon" />
            </Link>
          </div>
        </div>
        {/* Display team members */}
        <div className="teamMembers">
          {filteredCards.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              index={index}
              imageLoaded={imageLoaded}
              teamCardsCondition={teamCardsCondition}
              placeholderImg={placeholderImg}
              IEEEmembers={IEEEmembers}
              WIEmembers={WIEmembers}
              ShowSocialLinks={ShowSocialLinks}
              handleImageLoad={handleImageLoad}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default React.memo(Team);

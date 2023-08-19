import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Tilt from "react-parallax-tilt";
import ieeeIcon from "../assets/logos/ieeeIcon.svg";
import wieIcon from "../assets/logos/wieIcon.svg";
import "../components/Team.css";
import { IEEEmembers, WIEmembers } from "./ImportData"; // Import arrays of IEEE and WIE team members
import placeholderImg from "../assets/placeholders/download.png"; // Placeholder image for unloaded images
import teamMembers from "../data/TeamData.json"; // Import data containing team member information

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
        <div className="mainTitle">OUR TEAM</div>
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
            <Tilt
              className={`tiltDiv card-${index}`}
              key={index}
              tiltReverse={true}
              scale={1.1}
            >
              <div className="teamMemberCard">
                <div className="teamMember">
                  {/* Display team member image */}
                  <div className="imgDiv">
                    <img
                      src={
                        imageLoaded
                          ? teamCardsCondition === "IEEE"
                            ? IEEEmembers[index]
                            : WIEmembers[index]
                          : placeholderImg
                      }
                      loading="lazy"
                      alt={member.name.toUpperCase()}
                      className="img-fluid w-100"
                    />
                  </div>
                  {/* Display team member information */}
                  <div className="info rounded">
                    <Icon icon={member.icon} width={50} />
                    <h3>{member.name.toUpperCase()}</h3>
                    <p className="positionName">
                      {member.position.toUpperCase()}
                    </p>
                    <div className="socialIcons">
                      {member.instagramId && (
                        <a
                          className="socialIcon instagram"
                          href={`https://www.instagram.com/${member.instagramId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon icon="bi:instagram" />
                        </a>
                      )}
                      <div
                        className="showSocialLinksBtn"
                        onClick={ShowSocialLinks}
                      >
                        <Icon icon="tabler:social" />
                      </div>
                      {member.linkedin && (
                        <a
                          className="socialIcon linkedin"
                          href={`https://www.linkedin.com/in/${member.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon icon="bi:linkedin" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Hidden image element to trigger image load event */}
              <img
                src={
                  teamCardsCondition === "IEEE"
                    ? IEEEmembers[index]
                    : WIEmembers[index]
                }
                alt="Member Background"
                onLoad={handleImageLoad}
                style={{ display: "none" }} // Hide the image element
              />
            </Tilt>
          ))}
        </div>
      </div>
    </>
  );
}

export default React.memo(Team);

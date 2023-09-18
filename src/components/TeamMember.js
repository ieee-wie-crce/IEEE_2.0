import React from "react";
import Tilt from "react-parallax-tilt";
export default function TeamMember({
  member,
  Icon,
  index,
  imageLoaded,
  placeholderImg,
  handleImageLoad,
}) {
  return (
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
              src={imageLoaded ? member.imgsrc : placeholderImg}
              loading="lazy"
              alt={member.name.toUpperCase()}
              className="img-fluid w-100"
            />
          </div>
          {/* Display team member information */}
          <div className="info rounded">
            <Icon icon={member.icon} width={50} />
            <h3>{member.name.toUpperCase()}</h3>
            <p className="positionName">{member.position.toUpperCase()}</p>
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
              <div className="showSocialLinksBtn">
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
        src={member.imgsrc}
        alt="Member Background"
        onLoad={handleImageLoad}
        style={{
          display: "none",
        }} // Hide the image element
      />
    </Tilt>
  );
}

import React from "react";
import "../css/MentorAbout.css";
import Mentor from "./Mentor";
import mentorPlaceholder from "../assets/placeholders/mentorPlaceholder.png";
import { MENTORS } from "./ImportData";
import LordIcon from "./LordIcon";
function MentorAbout() {
  return (
    <>
      <div className="mentorAbout">
        <header className="makeitcenter">
          <LordIcon icon={"kthelypq"} w={50} h={50} />
          &nbsp;OUR MENTORS
        </header>
        <div className="border mb-4" />
        <div className="mentorContainer pb-5">
          {MENTORS.map((mentor, index) => (
            <Mentor
              key={index}
              mentor={mentor}
              index={index}
              mentorPlaceholder={mentorPlaceholder}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MentorAbout;

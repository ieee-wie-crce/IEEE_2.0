import React from "react";
import "../css/MentorAbout.css";
import Mentor from "./Mentor";
import { Icon } from "@iconify/react";
import mentorPlaceholder from "../assets/placeholders/mentorPlaceholder.png";
import { MENTORS } from "./ImportData";
function MentorAbout() {
  return (
    <>
      <div className="mentorAbout">
        <header>
          <Icon icon="fluent-mdl2:party-leader" /> OUR MENTORS
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

import React from "react";
import "../css/MentorAbout.css";
import Mentor from "./Mentor";
import { Icon } from "@iconify/react";
import mentorPlaceholder from "../assets/placeholders/mentorPlaceholder.png";
function MentorAbout() {
  const mentors = [
    {
      name: "Mrs. Sapna Prabhu",
      description: "IEEE-CRCE Branch Mentor",
    },
    {
      name: "Mrs. Sushma Nagdeote",
      description: "WIE-CRCE Branch Counsellor",
    },
    {
      name: "Mrs. Swapnali Makdey",
      description: "IEEE-CRCE Branch Counsellor",
    },
  ];
  return (
    <>
      <div className="mentorAbout">
        <header>
          <Icon icon="fluent-mdl2:party-leader" /> OUR{" "}
          <span style={{ color: "#0d6efd6e" }}>MENTORS</span>
        </header>
        <div className="border mb-4" />
        <div className="mentorContainer pb-5">
          {mentors.map((mentor, index) => (
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

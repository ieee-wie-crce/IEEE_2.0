import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Tilt from "react-parallax-tilt";
import eventPlaceholder from "../assets/placeholders/prakalp_placeholder.png";
import { EVENTS, EVENTTABS as tabs } from "./ImportData";
import bannerImg from "../assets/events/prakalpBanner.jpg";
import LordIcon from "./LordIcon";
import "../css/Events.css";

function Events() {
  // State for the active card condition and event image load status
  const [cardCondition, setCardCondition] = useState("all");
  const [eventImgLoaded, setEventImgLoaded] = useState(false);

  // Set the document title
  document.title = cardCondition.toString().toUpperCase() + " EVENTS";

  // Function to handle menu item clicks and update card condition
  useEffect(() => {
    const menu = document.querySelectorAll(".tab");
    menu.forEach((tab) => tab.classList.remove("is-active"));
    const activeTab = document.querySelector("." + cardCondition);
    activeTab.classList.add("is-active");
  }, [cardCondition]);

  // Function to handle image load event
  const handleImageLoad = () => {
    setEventImgLoaded(true);
  };

  // Memoized filtered data based on card condition
  const filteredData = useMemo(
    () =>
      cardCondition === "all"
        ? EVENTS
        : EVENTS.filter((info) =>
            info.keyword
              .toString()
              .split(",")
              .includes(cardCondition.toString())
          ),
    [cardCondition]
  );
  // console.table(filteredData);
  return (
    <div className="events">
      {/* Event title */}
      <div className="eventTitle makeitcenter">
        <LordIcon icon={"abfverha"} w={50} h={50}/>&nbsp;{document.title}
      </div>
      <hr className="mx-5" />
      {/* Banner Here */}
      {/* <div
        className="bannerImg px-4 d-flex justify-content-center"
        title="Register Now!"
      >
        <a
          href="https://shorturl.at/kHV09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={bannerImg}
            alt="Prakalp 2k24"
            className="img-fluid rounded-4"
          />
        </a>
      </div> */}
      {/* Mapping the Tabs */}
      <div className="navigation d-flex justify-content-center container">
        {tabs.map((tab, index) => (
          <Link
            className={tab.class + " tab"}
            onClick={() => setCardCondition(tab.class)}
            key={index}
          >
            <img src={tab.logo} alt="" width={50} />
          </Link>
        ))}
      </div>

      <div className="cardContent">
        {/* TABS */}
        {filteredData.length
          ? filteredData.map((info, key) => (
              <div
                key={key}
                id={`card-${key}`}
                className="cardDiv d-flex justify-content-center"
              >
                {EventCard(info)}
              </div>
            ))
          : "Stay Tuned For Further Updates!"}
      </div>
    </div>
  );

  function EventCard(info) {
    return (
      <Tilt className="eventTiltDiv" tiltReverse={true} scale={1.2}>
        <div className="eventCard">
          <div className="eventDiv">
            {/* Event image with conditional loading */}
            <div className="imgDiv p-2 ">
              <img
                src={eventImgLoaded ? info.imgsrc : eventPlaceholder}
                alt={info.title}
                className="img-fluid rounded w-100"
                loading="lazy"
              />
            </div>
            {/* Button for Ongoing Events */}
            {info.ongoingLink ? (
              <a href={info.ongoingLink}>
                <button className="btn btn-primary position-absolute registerBtn rounded-end-pill">
                  Register{" "}
                  <Icon icon="line-md:arrow-right" style={{ color: "white" }} />
                </button>
              </a>
            ) : null}
            {/* Event description */}
            <div className="eventContent p-1">
              <Icon icon="icons8:idea" /> {info.description}
            </div>
          </div>
        </div>
        {/* Hidden image to trigger image load event */}
        <img
          src={info.imgsrc}
          alt={info.title}
          onLoad={handleImageLoad}
          style={{ display: "none" }} // Hide the image element
        />
      </Tilt>
    );
  }
}

export default React.memo(Events);

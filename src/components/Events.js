import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Tilt from "react-parallax-tilt";
import cardData from "../data/EventsData.json";
import eventPlaceholder from "../assets/placeholders/prakalp_placeholder.png";
import "./Events.css";

function Events() {
  // Set the document title
  document.title = "EVENTS";

  // State for the active card condition and event image load status
  const [cardCondition, setCardCondition] = useState(1);
  const [eventImgLoaded, setEventImgLoaded] = useState(false);

  // Function to handle menu item clicks and update card condition
  const handleActive = (ele) => {
    const menu = document.querySelectorAll(".tab");
    menu.forEach((tab) => tab.classList.remove("is-active"));
    ele.target.classList.add("is-active");

    setCardCondition(
      ele.target.classList.contains("upcoming")
        ? "upcoming"
        : ele.target.classList.contains("wie")
        ? "wie"
        : 1 //all
    );
  };

  // Function to handle image load event
  const handleImageLoad = () => {
    setEventImgLoaded(true);
  };

  // Memoized filtered data based on card condition
  const filteredData = useMemo(
    () =>
      cardData.filter(
        (info) => info.keyword === cardCondition || cardCondition === 1
      ),
    [cardCondition]
  );

  return (
    <div className="events">
      {/* Event title and navigation */}
      <div className="eventTitle">
        I<span style={{ color: "#7ca2e3" }}>EEE</span> - Events
      </div>
      <div className="border" />
      <div className="navigation d-flex justify-content-center container">
        <Link className="tab all is-active" onClick={handleActive}>
          <Icon
            icon="material-symbols:select-all-rounded"
            style={{ pointerEvents: "none" }}
          />{" "}
          All
        </Link>
        <Link className="tab upcoming" onClick={handleActive}>
          <Icon
            icon="material-symbols:upcoming-outline"
            style={{ pointerEvents: "none" }}
          />{" "}
          Upcoming
        </Link>
        <Link className="tab wie" onClick={handleActive}>
          <Icon icon="solar:women-broken" style={{ pointerEvents: "none" }} />{" "}
          WIE
        </Link>
      </div>
      {/* Event cards */}
      <div className="cardContent">
        {filteredData.map((info, key) => (
          <div
            key={key}
            id={`card-${key}`}
            className="cardDiv d-flex justify-content-center"
          >
            {/* Render card content only if the condition matches */}
            {(info.keyword === cardCondition || cardCondition === 1) && (
              <Tilt className="eventTiltDiv" tiltReverse={true} scale={1.2}>
                <div className="eventCard">
                  <div className="eventDiv">
                    {/* Event image with conditional loading */}
                    <div className="imgDiv p-2 ">
                      <img
                        src={eventImgLoaded ? info.imageUrl : eventPlaceholder}
                        alt={info.name}
                        className="img-fluid rounded w-100"
                        loading="lazy"
                      />
                    </div>
                    {/* Event description */}
                    <div className="eventContent p-1">
                      <Icon icon="mdi:resource-description-framework" />{" "}
                      {info.description}
                    </div>
                  </div>
                </div>
                {/* Hidden image to trigger image load event */}
                <img
                  src={info.imageUrl}
                  alt={info.name}
                  onLoad={handleImageLoad}
                  style={{ display: "none" }} // Hide the image element
                />
              </Tilt>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Events);

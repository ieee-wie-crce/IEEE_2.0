import React, { useCallback } from "react";
import { Icon } from "@iconify/react";
import "../css/HoverCard.css";

const HoverCard = (props) => {
  const dismissHoverCard = useCallback(() => {
    const hoverCard = document.querySelector(".hoverCard");
    if (hoverCard) {
      hoverCard.style.display = "none";
      localStorage.setItem("cardDismissed", true);
    }
  }, []);

  return (
    <div className="hoverCard fixed-bottom m-3">
      <Icon
        icon="line-md:close-circle-twotone"
        className="position-absolute hoverCloseBtn"
        onClick={dismissHoverCard}
      />
      <img
        src={props.eventImg}
        alt="Event"
        className="img-fluid rounded-3 img-thumbnail"
      />

      {props.registrationLink ? (
        <a href={props.registrationLink}>
          <button className="btn btn-primary position-absolute registerBtn rounded-end-pill">
            Register{" "}
            <Icon icon="line-md:arrow-right" style={{ color: "white" }} />
          </button>
        </a>
      ) : null}
    </div>
  );
};

export default React.memo(HoverCard);

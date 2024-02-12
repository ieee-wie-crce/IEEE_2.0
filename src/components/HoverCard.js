import React, { useCallback } from "react";
import cardImg from "../assets/events/techVista.png";
import { Icon } from "@iconify/react";
import "../css/HoverCard.css";

const HoverCard = () => {
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
        src={cardImg}
        alt="Event"
        className="img-fluid rounded-3 img-thumbnail"
      />
      <a href="https://algozenithcrce.vercel.app/register">
        <button className="btn btn-primary position-absolute registerBtn rounded-end-pill">
          Register{" "}
          <Icon icon="line-md:arrow-right" style={{ color: "white" }} />
        </button>
      </a>
    </div>
  );
};

export default React.memo(HoverCard);

import React from "react";
import Tilt from "react-parallax-tilt";
import icon from "../assets/logos/ieee-white-logo.png";
import "../css/Card.css";
function Card(props) {
  return (
    <>
      <Tilt tiltReverse={true} scale={1.2}>
        <div className="card text-white mx-0">
          <div className="icon flex-column makeitcenter">
            <img
              src={props.icon}
              width={200}
              alt=""
              className="mb-5 img-fluid"
            />
            <h3 className="text-center">{props.title}</h3>
            {props.position && <p>{props.position}</p>}
          </div>

          {props.description && (
            <div className="slider d-flex align-items-center text-justify">
              <p>{props.description}</p>
            </div>
          )}
        </div>
      </Tilt>
    </>
  );
}

Card.defaultProps = {
  title: "IEEE",
  description: "",
  icon: icon,
};
export default Card;

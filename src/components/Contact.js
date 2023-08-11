import React from "react";
import underConstruction from "../assets/underConstruction.png";
function Contact() {
  return (
    <>
      <div className="contact d-flex justify-content-center align-items-center vw-100 vh-100" style={{background: "#f5f8f9"}}>
        <img className="img-fluid" src={underConstruction} alt="underConstruction" />
      </div>
    </>
  );
}

export default React.memo(Contact);

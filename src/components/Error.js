import React from "react";
import errorImg from "../assets/Error404.jpg";
export default function Error() {
  const errorStyle = {
    width: "100vw",
    height: "100vh",
    objectFit: "contain",
    backgroundColor: "#fffff",
  };
  return (
    <>
      <img src={errorImg} style={errorStyle} alt="Under Construction" />
    </>
  );
}

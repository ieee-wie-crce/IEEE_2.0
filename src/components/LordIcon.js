import React from "react";

export default function LordIcon({ icon, w, h }) {
  return (
    <lord-icon
      src={"https://cdn.lordicon.com/" + icon + ".json"}
      trigger="hover"
      colors="primary:#ffffff"
      style={{ width: w, height: h }}
    ></lord-icon>
  );
}

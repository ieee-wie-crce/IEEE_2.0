import React from "react";

function LordIcon({ icon, w, h, trigger, delay }) {
  return (
    <lord-icon
      src={"https://cdn.lordicon.com/" + icon + ".json"}
      trigger={trigger}
      colors="primary:#ffffff"
      style={{ width: w, height: h }}
      delay={delay}
    ></lord-icon>
  );
}
LordIcon.defaultProps = {
  icon: "etdtbiqy",
  w: "25px",
  h: "25px",
  trigger: "hover",
  delay: false,
};
export default React.memo(LordIcon);

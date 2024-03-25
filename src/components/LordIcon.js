import React from "react";

function LordIcon({ icon, w, h, trigger, delay, colors, stroke,state }) {
  return (
    <lord-icon
      src={"https://cdn.lordicon.com/" + icon + ".json"}
      trigger={trigger}
      colors={colors}
      style={{ width: w, height: h }}
      delay={delay}
      stroke={stroke}
      state={state}
    ></lord-icon>
  );
}
LordIcon.defaultProps = {
  icon: "etdtbiqy",
  w: "25px",
  h: "25px",
  trigger: "hover",
  delay: false,
  colors: "primary:#ffffff",
  stroke: "regular",
  state:null,
};
export default React.memo(LordIcon);

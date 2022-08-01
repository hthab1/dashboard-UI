import React from "react";
import "./Toggle.css";

function Toggle({ toggle }) {
  return (
    <div className="toggle">
      {toggle ? (
        <div className="toggleOn"></div>
      ) : (
        <div className="toggleOff"></div>
      )}
    </div>
  );
}

export default Toggle;

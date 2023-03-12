import React from "react";
import "./LockSlider.css";

export default function LockSlider({ handleInput, sliderValue, width }) {
  let sliderStyle = {
    appearance: "none",
    width: !width ? "300px" : width,
    height: "55px",
    background: "rgba(188, 190, 188, 0.5)",
    outline: "none",
    borderRadius: "50px",
    border: "3px solid white",
    overflow: "hidden",
    position: "relative",
    "&::-webkit-slider-thumb": {
      appearance: "none",
      width: "50px",
      height: "50px",
      background: "rgba(188, 190, 188, 0.5)",
      borderRadius: "50%",

      position: "absolute",
      top: "0",
      left: "0",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        background: "rgba(188, 190, 188, 0.8)",
      },
      "&:active": {
        background: "rgba(188, 190, 188, 1)",
      },
    },
  };

  return (
    <div>
      <input
        type="range"
        className="slider"
        style={sliderStyle}
        onInput={handleInput}
        value={sliderValue}
      />
    </div>
  );
}

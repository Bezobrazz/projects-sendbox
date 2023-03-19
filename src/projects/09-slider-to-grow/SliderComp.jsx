import React from "react";

function SliderComp({ setValue, handelInput, bgColor, textColor }) {
  return (
    <div className="d-flex flex-column" style={{ gap: 100 }}>
      <input
        type="range"
        min={0}
        max={100}
        value={setValue}
        onChange={handelInput}
      />
      <div
        style={{
          color: !textColor ? "black" : textColor,
          backgroundColor: !bgColor ? "white" : bgColor,
          width: `${setValue * 3}px`,
          height: `${setValue * 3}px`,
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <span>{setValue}</span>
      </div>
    </div>
  );
}

export default SliderComp;

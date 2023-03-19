import React, { useState } from "react";
import SliderComp from "./SliderComp";
import Title from "../components/Title";

export default function SliderToGrow() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderValueChange = (e) => {
    setSliderValue(e.target.value);
  };

  console.log(sliderValue);

  let bgColor;
  let textColor;

  if (sliderValue < 25) {
    bgColor = "red";
    textColor = "white";
  } else if (sliderValue < 50) {
    bgColor = "orange";
    textColor = "white";
  } else if (sliderValue < 75) {
    bgColor = "yellow";
    textColor = "black";
  } else {
    bgColor = "green";
    textColor = "white";
  }

  return (
    <div className="container text-center">
      <Title text={"Slide To Grow"} />
      <SliderComp
        setValue={sliderValue}
        handelInput={handleSliderValueChange}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import HomeSkreenImg from "./img/home.jpg";
import LockSkreenImg from "./img/moon.jpg";

export default function SlideToUnlockApp() {
  const [uiProps, setUiProps] = useState({
    uiText: "Slide to unlock",
    uiColor: "#eeee",
    uiBg: `url(${LockSkreenImg})center/cover no-repeat`,
  });

  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState("0");
  const handleLockSliderInput = (e) => {
    // setLockSliderValue(0);
    setLockSliderValue(e.target.value);
    // if (e.target.value >= 100) {
    //   setUiProps({
    //     uiText: "Unlocked",
    //     uiColor: "black",
    //     uiBg: `url(${HomeSkreenImg})center/cover no-repeat`,
    //   });
    //   setShowLockSlider(false);
    // }
  };
  const lockScreen = () => {
    setLockSliderValue("0");
    setShowLockSlider(true);
    setUiProps({
      uiText: "Slide to unlock",
      uiColor: "#eeee",
      uiBg: `url(${LockSkreenImg})center/cover no-repeat`,
    });
  };

  useEffect(() => {
    document.body.style.background = "#9999";
    if (lockSliderValue === "100") {
      setShowLockSlider(false);
      setLockSliderValue("0");
      setUiProps({
        uiText: "Unlocked",
        uiColor: "black",
        uiBg: `url(${HomeSkreenImg})center/cover no-repeat`,
      });
    }
  }, [lockSliderValue]);
  return (
    <div
      className="container text-center d-flex flex-column border-15"
      style={{
        height: "70vh",
        marginTop: "15vh",
        width: "340px",
        border: "1px solid black",
        background: uiProps.uiBg,
      }}
    >
      <h1 className="title" style={{ color: uiProps.uiColor }}>
        {uiProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider
          width={"250px"}
          handleInput={handleLockSliderInput}
          value={lockSliderValue}
        />
      ) : (
        <AiFillUnlock className="unlockIcon" onClick={lockScreen} />
      )}
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
function HiddenSearchBar() {
  const [uiProps, setUiProps] = useState({
    bg: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
    shadow: "",
    transition: "all 0.5s ease",
    opacity: "0",
    showSearchIcon: true,
  });

  let body = document.body.style;
  let inputStyle = {
    width: "20vh",
    height: "30px",
    margin: "10vh 25vw",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: "1px solid #ccc",
    fontSize: "1.5rem",
    color: "grey",
    transition: "all .5s ease",
    boxshadow: "0px 55px 60px -15px rgba(0,0,0,.5)",
    opacity: uiProps.opacity,
  };

  let bsSearchStyle = {
    color: "black",
    fontSize: "1.5rem",
    cursor: "pointer",
    position: "absolute",
    right: "1rem",
    top: "1rem",
  };

  const inputEl = useRef(null);
  useEffect(() => {
    body.background = uiProps.bg;
    body.boxshadow = uiProps.shadow;
    body.transition = uiProps.transition;
  }, [uiProps.shadow, uiProps.bg, uiProps.transition, body]);

  const showSearch = () => {
    setUiProps({
      opacity: "1",
      showSearchIcon: false,
      bg: "white",
      shadow: "0px 55px 60px -15px rgba(0,0,0,.5)",
      transition: "all .5s ease",
    });
    inputEl.current.focus();
  };

  const handleSearchFocus = () => {
    setUiProps({
      shadow: "inset 0 -60vh 30vw 200px rgba(0,0,0,.5)",
      borderBottomColor: "green",
    });
  };

  const handleSearchBlur = (e) => {
    setUiProps({
      shadow: "none",
      opacity: "0",
      showSearchIcon: true,
    });
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      <input
        type="text"
        placeholder="Search"
        style={inputStyle}
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
        ref={inputEl}
      />
      {uiProps.showSearchIcon ? (
        <BsSearch
          className="search-icon"
          style={bsSearchStyle}
          onClick={showSearch}
        />
      ) : null}
    </div>
  );
}

export default HiddenSearchBar;

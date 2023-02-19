import React, { useState } from "react";
import Title from "../components/Title";

export default function EsignatureApp() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    width: "40%",
    bordetr: "none",
    outline: "none",
    background: "none",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  };

  return (
    <div className="container text-center">
      <Title classes={"title"} text={!name ? "Write Your Name" : name} />
      <Title
        classes={"main-title mb-4"}
        text={!date ? "Choose The Date" : date}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam in
        ipsam blanditiis deleniti ab mollitia ipsa itaque possimus nam
        dignissimos provident consectetur architecto, porro, quam praesentium
        fugit, quo libero!
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type="date"
          value={new Date().toLocaleString("uk-UA")}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          placeholder="Write Your Name"
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}

import React from "react";
import Button from "../components/Button";

export default function TemperatureControllerApp() {
  const [temperature, setTemperature] = React.useState(0);
  const [value, setValue] = React.useState(true);
  const incrHandler = () => {
    setTemperature(temperature + 1);
  };
  const decrHandler = () => {
    setTemperature(temperature - 1);
  };
  const handleToFahrenheitClick = () => {
    setValue(false);
    setTemperature((temperature * 9) / 5 + 32);
  };
  const handleToCelsiusClick = () => {
    setValue(true);
    setTemperature(0);
  };

  return (
    <div className="container mt-3 text-center">
      <div className=" card bg-light m-auto" style={{ width: 200 }}>
        <h1
          className={`text-light card border-50 ${
            temperature > 0 ? "bg-danger" : "bg-info"
          }`}
          style={{ height: 150, width: 150, border: "2px solid #666" }}
        >
          {temperature}° {value ? "C" : "F"}
        </h1>
        {value ? (
          <Button
            text={"Convert to Fahrenheit"}
            onClick={handleToFahrenheitClick}
          />
        ) : (
          <Button text={"Return to Celsius"} onClick={handleToCelsiusClick} />
        )}
        <div className="d-flex my-2">
          <Button text={"-"} onClick={decrHandler} />
          <Button text={"+"} onClick={incrHandler} />
        </div>
      </div>
    </div>
  );
}

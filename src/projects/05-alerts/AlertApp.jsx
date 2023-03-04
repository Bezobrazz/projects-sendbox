import React from "react";
import Alert from "../components/Alert";

export default function AlertApp() {
  return (
    <div className="container mx-auto">
      <Alert type={"success"} message={"Successful Login"} />
      <Alert type={"danger"} />
      <Alert type={"primary"} message={"Time triggered"} delay={true} />
    </div>
  );
}

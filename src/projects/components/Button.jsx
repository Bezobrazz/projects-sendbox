import React from "react";

export default function Button(props) {
  return (
    <button className={`btn ${props.btnClass}`} onClick={props.onClick}>
      {props.icon}
      {!props.text ? "Click" : props.text}
    </button>
  );
}

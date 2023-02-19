import React from "react";

export default function Title(props) {
  return (
    <h1 className={!props.classes ? "title text-center" : props.classes}>
      {!props.text ? "Title" : props.text}
    </h1>
  );
}

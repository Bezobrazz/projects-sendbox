import React from "react";

export default function Title(props) {
  return (
    <h1
      className={
        !props.classes ? "title" : props.classes && "title text-center"
      }
    >
      {!props.text ? "Title" : props.text}
    </h1>
  );
}

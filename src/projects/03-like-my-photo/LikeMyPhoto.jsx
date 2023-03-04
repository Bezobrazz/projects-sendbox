import React, { useState } from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineMessage,
} from "react-icons/ai";
import Dogy from "./img/welcome.jpg";

function LikeMyPhoto() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <div className="container text-center">
      <Title text={"Like My Photo"} classes={"mb-4"} />
      <Title text={`Likes ${count}`} classes={"subtitle"} />
      <div
        className="card card-dark m-auto shadow-sm"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div
          className="card-header fs-xl d-flex"
          style={{ justifyContent: "center", gap: 10 }}
        >
          <AiFillSmile />
          <small>Dogy Dog</small>
        </div>
        <img
          src={Dogy}
          alt="Dogy"
          style={{ height: "fit-content" }}
          onDoubleClick={toggleLike}
        />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineMessage />{" "}
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LikeMyPhoto;

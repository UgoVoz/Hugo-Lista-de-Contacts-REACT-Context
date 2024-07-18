import React from "react";
import { Link } from "react-router-dom";

export const ProfilePicture = ({ full_name, img }) => {
  return (
    <div
      className="rounded-top p-3"
      style={{ background: "rgb(197, 198, 198)" }}>
      <Link to="/">Back</Link>
      <div className="mx-auto col-md-3 col-6 ">
        <img
          src={img}
          className="rounded-circle my-3 border"
          style={{
            width: "100%",
            aspectRatio: "1:1"
          }}
        />
        <h1 className="h1 text-center">{full_name}</h1>
      </div>
    </div>
  );
};
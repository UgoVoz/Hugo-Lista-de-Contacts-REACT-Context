import React from "react";
import { Link } from "react-router-dom";

export const ContactData = ({ data, value, link }) => {
  return (
    <li className="my-3">
      <Link
        to={link}
        style={{
          color: "black",
          textDecoration: "none"
        }}>
        <b>{data}:</b> {value}
      </Link>
    </li>
  );
};
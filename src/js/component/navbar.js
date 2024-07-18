import React from "react";
import { Link } from "react-router-dom";
import guapu from "../../img/Guapu.jpg"

export const Navbar = () => {
  return (
    <nav className="bg-light bg-light mb-3 d-flex justify-content-between py-2">
      <Link to="/" className="h1 fs-2 mx-5 text-dark">
        <img src={guapu} style={{ width: "100px", height: "50px" }}>
        </img>
      </Link>
      <div className="ml-auto">
        <Link to="/new-contact">
          <button className="btn btn-primary mx-5">Agregar Contacto</button>
        </Link>
      </div>
    </nav>
  );
};
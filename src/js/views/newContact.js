import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const NewContact = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [currentContact, setCurrentContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  });

  return (
    <div className="container">
      <h1 className="h1 text-center">Agregar Nuevo Contacto</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          actions.addContact(currentContact);
          navigate("/");
        }}>
        <div className="my-3">
          <label htmlFor="full_name" className="form-label">
            Nombre
          </label>
          <input
            className="w-100"
            type="text"
            name="full_name"
            id="full_name"
            placeholder="Full Name"
            required
            onChange={e => {
              setCurrentContact({
                ...currentContact,
                full_name: e.target.value
              });
            }}
          />
        </div>

        <div className="my-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="w-100"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            onChange={e => {
              setCurrentContact({ ...currentContact, email: e.target.value });
            }}
          />
        </div>

        <div className="my-3">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input
            className="w-100"
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter Phone"
            required
            onChange={e => {
              setCurrentContact({ ...currentContact, phone: e.target.value });
            }}
          />
        </div>

        <div className="my-3">
          <label htmlFor="address" className="form-label">
            Dirección
          </label>
          <input
            className="w-100"
            type="text"
            name="address"
            id="address"
            placeholder="Enter Address"
            onChange={e => {
              setCurrentContact({ ...currentContact, address: e.target.value });
            }}
          />
        </div>

        <button className="btn btn-primary w-100 fw-bold">Guardar</button>
      </form>
      <Link to="/">Atrás</Link>
    </div>
  );
};
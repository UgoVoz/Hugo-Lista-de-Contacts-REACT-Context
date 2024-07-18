import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const EditContact = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const contacts = store.contacts;
  const { id } = useParams();
  const specificContact = contacts.find(contact => contact.id == id);

  const [currentContact, setCurrentContact] = useState(specificContact);

  return (
    <div className="container">
      <h1 className="h1 text-center">Editar Contacto</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          actions.editContact(currentContact);
          navigate(`/contacts/${id}`);
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
            value={currentContact.full_name}
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
            value={currentContact.email}
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
            value={currentContact.phone}
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
            value={currentContact.address}
            onChange={e => {
              setCurrentContact({ ...currentContact, address: e.target.value });
            }}
          />
        </div>

        <button className="btn btn-primary w-100 fw-bold">Guardar</button>
      </form>
      <Link to={`/contacts/${id}`}>Atrás</Link>
    </div>
  );
};
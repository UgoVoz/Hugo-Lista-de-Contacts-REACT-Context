import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import guapu from "../../img/Guapu.jpg"

export const Contact = ({ full_name, address, phone, email, id }) => {
    const { actions } = useContext(Context);

    return (
        <div className="contact border row rounded d-flex p-2 ">
            <div className="contact__image ms-2 col-md-3 col-4 p-0">
                <Link to={`/contacts/${id}`}>
                    <img
                        src={guapu}
                        className="rounded-circle m-auto border border-1"
                        style={{
                            width: "100%",
                            aspectRatio: "1:1",
                            objectFit: "contains"
                        }}
                    />
                </Link>
            </div>
            <div className="contact__info mx-3 col-md-6 col-4">
                <div className="contact__name">
                    <Link
                        to={`/contacts/${id}`}
                        className="fs-3 nombre"
                        style={{
                            fontWeight: "600",
                            color: "black",
                            textDecoration: "none"
                        }}>
                        {full_name}
                    </Link>
                </div>
                <div className="contact__lpe text-muted mt-3">
                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <span className="fs-6 location ms-2">{address}</span>
                    </p>
                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <span className="fs-6 phone ms-2">{phone}</span>
                    </p>
                    <p>
                        <i className="fa-solid fa-envelope"></i>
                        <span className="fs-6 email ms-2">{email}</span>
                    </p>
                </div>
            </div>
            <div className="contact__options d-flex col-md-2 col-2">
                <Link to={`/edit-contact/${id}`} className="mx-auto text-dark">
                    <i className="fa-solid fa-pencil fs-4 edit mx-auto"></i>
                </Link>
                <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target={`#${full_name.replace(/\s/g, "")}`}
                    style={{ height: "0px", border: "none", background: "none" }}>
                    <i className="fa-solid fa-trash-can fs-4 delete mx-auto"></i>
                </button>
                <Link to={`/contacts/${id}`} className="ms-auto">
                    Ver el Contacto
                </Link>
            </div>
            <div
                className="modal fade"
                id={full_name.replace(/\s/g, "")}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Delete Contact
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Do you want to remove {full_name} from your contacts?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    actions.deleteContact(id);
                                }}>
                                Remove Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
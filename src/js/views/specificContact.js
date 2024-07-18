import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ProfilePicture } from "../component/ProfilePicture";
import { ContactData } from "../component/ContactData";

export const SpecificContact = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const contacts = actions.formatData(store.contacts);

  const specificContact = contacts.find(contact => contact.id == id);
  return (
    <>
      <div className="container">
        <ProfilePicture
          full_name={specificContact.full_name}
          img="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
        />
        <ul
          className={window.innerWidth > 800 ? "text-center" : ""}
          style={{ listStyle: "none", padding: "0" }}>
          <ContactData
            data="Address"
            value={specificContact.address}
            link={`/edit-contact/${id}`}
          />
          <ContactData
            data="Phone"
            value={specificContact.phone}
            link={`/edit-contact/${id}`}
          />
          <ContactData
            data="Email"
            value={specificContact.email}
            link={`/edit-contact/${id}`}
          />
          <ContactData
            data="Id"
            value={specificContact.id}
            link={`/edit-contact/${id}`}
          />
          <ContactData
            data={
              <>
                <i className="fa-brands fa-whatsapp"></i> Call
              </>
            }
            value={specificContact.phone}
            link=""></ContactData>
          <ContactData
            data={
              <>
                <i className="fa-brands fa-whatsapp"></i> Video call
              </>
            }
            value={specificContact.phone}
            link=""></ContactData>
          <ContactData
            data={
              <>
                <i className="fa-brands fa-whatsapp"></i> Send message to
              </>
            }
            value={specificContact.phone}
            link=""></ContactData>
          <ContactData
            data={
              <>
                <i className="fa-solid fa-clapperboard"></i> Call Recorder
              </>
            }
            value={specificContact.phone}
            link=""></ContactData>
        </ul>
      </div>
      <div style={{ height: "10px" }}></div>
    </>
  );
};
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactCard.jsx";

export const ContactList = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleDeleteContact = (id) => {
        actions.deleteContact(id);
    };

    const handleUpdateContact = (contact) => {
        navigate("/add", { state: { contact } });
    };

    return (
        <div className="container mt-4">
            <ul className="list-group">
                {store.contacts.map((contact) => (
                    <ContactCard
                        key={contact.id}
                        contact={contact}
                        onDelete={handleDeleteContact}
                        onUpdate={handleUpdateContact}
                    />
                ))}
            </ul>
        </div>
    );
};

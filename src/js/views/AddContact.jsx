import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const contactToEdit = location.state?.contact;

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    useEffect(() => {
        if (contactToEdit) {
            setContact(contactToEdit);
        }
    }, [contactToEdit]);

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contactToEdit) {
            actions.updateContact(contact.id, contact);
        } else {
            actions.addContact(contact);
        }
        navigate("/");
    };

    return (
        <div className="container">
            <h1>{contactToEdit ? "Edit Contact" : "Add Contact"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={contact.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={contact.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={contact.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary col-12 mt-3">
                    {contactToEdit ? "Update Contact" : "Add Contact"}
                </button>
                <br />
                <Link className="mt-3 w-100 text-center" to="/">
                    or get back to contacts
                </Link>
            </form>
        </div>
    );
};

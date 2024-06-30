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
        <div className="container mt-5">
            <h1>
                {contactToEdit
                    ? "Editar un contacto"
                    : "Agregar nuevo contacto"}
            </h1>
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
                        placeholder="Nombre completo"
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
                        placeholder="Ingresa tu email"
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="number"
                        name="phone"
                        className="form-control"
                        value={contact.phone}
                        onChange={handleChange}
                        required
                        placeholder="Ingresa tu numero de telefono"
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
                        placeholder="Ingresa tu dirección"
                    />
                </div>
                <button type="submit" className="btn btn-primary col-12 mt-3">
                    {contactToEdit ? "Update Contact" : "Agregar contacto"}
                </button>
                <br />
                <Link className="mt-3 w-100 text-center" to="/">
                    o vuelve a tus contactos
                </Link>
            </form>
        </div>
    );
};

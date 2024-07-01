import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/form.css";

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
        <div className="container mt-5 mb-4">
            <h1>
                {contactToEdit
                    ? "Editar un contacto"
                    : "Agregar nuevo contacto"}
            </h1>
            <form className="custom-form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control no-border-focus"
                        value={contact.name}
                        onChange={handleChange}
                        required
                        placeholder="Nombre completo"
                    />
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control no-border-focus"
                        value={contact.email}
                        onChange={handleChange}
                        required
                        placeholder="Ingresa tu email"
                    />
                </div>
                <div className="form-group">
                    <label>Telefono</label>
                    <input
                        type="number"
                        name="phone"
                        className="form-control no-border-focus"
                        value={contact.phone}
                        onChange={handleChange}
                        required
                        placeholder="Ingresa tu numero de telefono"
                    />
                </div>
                <div className="form-group">
                    <label>Dirección</label>
                    <input
                        type="text"
                        name="address"
                        className="form-control no-border-focus"
                        value={contact.address}
                        onChange={handleChange}
                        required
                        placeholder="Ingresa tu dirección"
                    />
                </div>
                <button type="submit" className="btn col-12 mt-3">
                    {contactToEdit ? "Update Contact" : "Agregar contacto"}
                </button>
                <br />
                <Link className="w-100 text-center anchor1" to="/">
                    o vuelve a tus contactos
                </Link>
            </form>
        </div>
    );
};

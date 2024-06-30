import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "./Modal";
import "../../styles/form.css";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";
import img5 from "../../img/5.png";
import img6 from "../../img/6.png";
import img7 from "../../img/7.png";
import img8 from "../../img/8.png";

const imagesArray = [img1, img2, img3, img4, img5, img6, img7, img8];

const getRandomColor = () => {
    const colors = ["#e81cff", "#40c9ff"];
    return colors[Math.floor(Math.random() * colors.length)];
};

const ContactCard = ({ contact, onDelete, onUpdate }) => {
    const [showModal, setShowModal] = useState(false);
    const randomImage =
        imagesArray[Math.floor(Math.random() * imagesArray.length)];
    const gradientAngle = Math.floor(Math.random() * 360);
    const color1 = getRandomColor();
    const color2 = getRandomColor();

    const gradientStyle = {
        backgroundImage: `linear-gradient(${gradientAngle}deg, transparent 35%, ${color1}, ${color2})`,
    };

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        onDelete(contact.id);
        setShowModal(false);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    const handleUpdateClick = () => {
        onUpdate(contact);
    };

    return (
        <li className="list-group-item custom-form-container mb-4">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img
                        src={randomImage}
                        alt="User"
                        className="rounded-circle mx-auto d-block img-fluid"
                        width="100"
                        style={gradientStyle}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-6 d-flex flex-column justify-content-center">
                    <strong
                        className="name lead"
                        style={{ fontWeight: "bold" }}
                    >
                        {contact.name}
                    </strong>
                    <div>
                        <i className="fas fa-map-marker-alt me-3" />
                        <span className="text-muted">{contact.address}</span>
                    </div>
                    <div>
                        <span className="fa fa-phone fa-fw me-2" />
                        <span className="text-muted small">
                            {contact.phone}
                        </span>
                    </div>
                    <div>
                        <span className="fa fa-envelope fa-fw me-2" />
                        <span className="text-muted small">
                            {contact.email}
                        </span>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-3 text-right d-flex align-items-center justify-content-end">
                    <i
                        className="fas fa-pencil-alt mr-3"
                        style={{ cursor: "pointer", fontSize: "1.5rem" }}
                        onClick={handleUpdateClick}
                    />
                    <i
                        className="fas fa-trash-alt ms-5"
                        style={{ cursor: "pointer", fontSize: "1.5rem" }}
                        onClick={handleDeleteClick}
                    />
                </div>
            </div>
            <Modal
                show={showModal}
                title="¿Confirmar eliminación?"
                message={`¿Estás seguro de eliminar a ${contact.name}?`}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
        </li>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default ContactCard;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "./Modal";

const ContactCard = ({ contact, onDelete, onUpdate }) => {
    const [showModal, setShowModal] = useState(false);

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
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5ht-DmJQ3JIw-sV3MgaLrhMeT5conJ86MA&s"
                        alt="Mike Anamendolla"
                        className="rounded-circle mx-auto d-block img-fluid"
                        width="100"
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-6 d-flex flex-column justify-content-center">
                    <strong
                        className="name lead"
                        style={{ color: "black", fontWeight: "bold" }}
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
                title="Confirm Delete Contact"
                message={`Are you sure do you want to delete ${contact.name}?`}
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

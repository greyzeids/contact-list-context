import React from "react";
import PropTypes from "prop-types";

export const Modal = ({ show, title, message, onConfirm, onCancel }) => {
    if (!show) return null;

    return (
        <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={onCancel}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onCancel}
                        >
                            Oh no!
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onConfirm}
                        >
                            Oh yes baby!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string,
    message: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

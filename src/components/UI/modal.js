import React from "react";
import {Modal} from 'react-bootstrap'

const NewMOdal = ({children, handleClose, show, modalTitle}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={handleClose}
          className="px-2 py-1 rounded-md bg-blue-800 text-white"
        >
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewMOdal;

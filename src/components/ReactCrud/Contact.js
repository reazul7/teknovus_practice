import React, { useContext, useEffect, useState } from "react";
import { CreateContactContext } from "./ContactContext";
import { Modal } from "react-bootstrap";
import EditContact from "./EditContact";

function Contact({ contact }) {
  const { deleteContact } = useContext(CreateContactContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //   console.log(contact, "from contact-page");
  const { id, name, email, phone } = contact;

  useEffect(() => {
    handleClose();
  }, [contact]);


  return (
    <>
      <td className="px-3 border">{id}</td>
      <td className="px-3 border">{name}</td>
      <td className="px-3 border">{email}</td>
      <td className="px-3 border">{phone}</td>
      <td className="px-3 border">
        <button onClick={handleShow} className="mx-1">Edit</button>
        <button onClick={() => deleteContact(contact.id)} className="mx-1">
          Delete
        </button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
          <Modal.Body>
            <EditContact contact={contact}/>
          </Modal.Body>
          <button onClick={handleClose}>Close</button>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Contact;

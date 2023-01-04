import { Modal } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import Contact from "./Contact";
import { CreateContactContext } from "./ContactContext";
import AddContact from "./AddContact";

function ContactList() {
  const { contacts } = useContext(CreateContactContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [contacts]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="px-3 text-center border">ID</th>
            <th className="px-3 text-center border">Name</th>
            <th className="px-3 text-center border">Email</th>
            <th className="px-3 text-center border">Phone</th>
            <th className="px-3 text-center border">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.sort((a,b) => (a.name < b.name ? -1 : 1)).map((contact) => (
            <tr key={contact.id}>
              <Contact contact={contact} />
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pt-3">
        <button onClick={handleShow}>Add Contact</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
          <Modal.Body>
            <AddContact />
          </Modal.Body>
          <button onClick={handleClose}>Close</button>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default ContactList;

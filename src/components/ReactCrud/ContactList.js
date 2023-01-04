import { Alert, Modal } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { CreateContactContext } from "./ContactContext";
import Contact from "./Contact";
import AddContact from "./AddContact";

function ContactList() {
    const { contacts } = useContext(CreateContactContext);
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 1000);
    };

    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert();
        };
    }, [contacts]);

    return (
        <>
            <Alert show={showAlert} variant="success">
                Contacts Update Successfully
            </Alert>
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
                    {contacts
                        .sort((a, b) => (a.name < b.name ? -1 : 1))
                        .map((contact) => (
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

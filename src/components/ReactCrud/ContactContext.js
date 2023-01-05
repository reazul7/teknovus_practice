import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CreateContactContext = createContext();

function ContactContext(props) {
    const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")));

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    });

    const addContact = (name, email, phone) => {
        setContacts([...contacts, { id: uuidv4(), name, email, phone }]);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const editContact = (id, editedContact) => {
        setContacts(contacts.map((contact) => (contact.id === id ? editedContact : contact)));
    };

    return (
        <CreateContactContext.Provider value={{ contacts, addContact, deleteContact, editContact }}>
            {props.children}
        </CreateContactContext.Provider>
    );
}

export default ContactContext;

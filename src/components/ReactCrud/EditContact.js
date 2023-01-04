import React, { useContext, useState } from "react";
import { CreateContactContext } from "./ContactContext";

function EditContact({ contact }) {
  //   console.log(contact, "edit contact");

  const { editContact } = useContext(CreateContactContext);
  const id = contact.id;

  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const editedContact = { id, name, email, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    editContact(id, editedContact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name.."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email.."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="phone.."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button className="btn btn-secondary">Update Contact</button>
    </form>
  );
}

export default EditContact;

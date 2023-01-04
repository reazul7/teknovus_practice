import React, { useContext, useState } from "react";
import { CreateContactContext } from "./ContactContext";

function AddContact() {
  const { addContact } = useContext(CreateContactContext);
  //   const [newContact, setNewContact] = useState({
  //     name: "", email: "", phone: ""
  //   });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, email, phone);
    console.log(name, email, phone);
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
      <button className="btn btn-secondary">Add New Contact</button>
    </form>
  );
}

export default AddContact;

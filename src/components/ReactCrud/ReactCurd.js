import React from "react";
import ContactList from "./ContactList";
import ContactContext from "./ContactContext"

function ReactCurd() {
  return (
    <ContactContext>
      <ContactList />
    </ContactContext>
  );
}

export default ReactCurd;

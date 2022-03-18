import AddContact from "./AddContact";
import Header from "./Header";
import React, { useState } from "react";
import ContactList from "./ContactList";
//import { uuid } from "uuidv4";

function App() {
  //const dummy_contact = [{}];
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    const mergeData = [...contacts, { id: Math.random(), ...contact }];
    setContacts(mergeData);
  };
  const removehandler = (id) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(filteredContacts);
  };
  return (
    <div>
      <Header></Header>
      <AddContact addContact={addContactHandler}></AddContact>
      <ContactList
        contacts={contacts}
        getContactId={removehandler}
      ></ContactList>
    </div>
  );
}

export default App;

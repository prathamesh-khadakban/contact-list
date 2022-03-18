import AddContact from "./AddContact";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
//import { uuid } from "uuidv4";

function App() {
  //const dummy_contact = [{}];
  const LOCAL_STORAGE_KEY = "contacts";
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
  // add dependancy params cause on contacts chnage that should also update in local storage
  useEffect(() => {
    const retiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retiveContacts) setContacts(retiveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

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

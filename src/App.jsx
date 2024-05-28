import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import { useState } from "react";
import contacts from "./data/contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts);
  const [searchContact, setSearchContact] = useState("");

  const searchData = contactList.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(searchContact.toLocaleLowerCase())
  );

  const newContact = (someContact) => {
    setContactList((prevContacts) => {
      return [...prevContacts, someContact];
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={newContact} />
      <SearchBox value={searchContact} onChange={setSearchContact} />
      <ContactList contactList={searchData} />
    </div>
  );
}

export default App;

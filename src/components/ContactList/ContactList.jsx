import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactList }) => {
  return (
    <ul className={css.contactList}>
      {contactList.map((contactItem) => {
        return (
          <li key={contactItem.id} className={css.contactItems}>
            <Contact name={contactItem.name} number={contactItem.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

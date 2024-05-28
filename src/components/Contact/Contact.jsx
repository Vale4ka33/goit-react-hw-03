import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const Contact = ({ name, number }) => {
  return (
    <div className={css.contactContainer}>
      <div>
        <div className={css.contactItem}>
          <IoMdPerson className={css.iconPerson} />
          <span>{name}</span>
        </div>
        <div className={css.contactItem}>
          <FaPhoneAlt className={css.iconPhone} />
          <span>{number}</span>
        </div>
      </div>
      <button className={css.btn}>Delete</button>
    </div>
  );
};

export default Contact;

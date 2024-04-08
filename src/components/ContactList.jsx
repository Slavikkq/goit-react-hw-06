import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";
import Contact from "./Contact";

export default function ContactList({ filter }) {
  const contacts = useSelector((state) => selectContacts(state, filter));

  if (!Array.isArray(contacts)) {
    return <p>No contacts available.</p>;
  }

  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
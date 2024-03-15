import Contact from "../Contact/Contact";
import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDelete }) => {
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact && <Contact contact={contact} onDelete={onDelete} />}
          </li>
        ))}
      </ul>
    );
  };
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ).isRequired,
    onDelete: PropTypes.func.isRequired
  };
  
  export default ContactList;
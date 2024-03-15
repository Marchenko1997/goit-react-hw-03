import PropTypes from 'prop-types';

const Contact = ({contact, onDelete}) => {
    const {id ,name, number}= contact;

    const handleDelete = () => {
        onDelete(id);
      };
  return (
    <div>
        <p> {name}</p>
        <p> {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
Contact.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired
  };
  export default Contact;
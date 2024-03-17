import { ButtonDelete, ContactItem } from './ContactList.styled';

const Contact = ({ id, name, number, deleteID }) => {
  return (
    <ContactItem>
      {name}: {number}
      <ButtonDelete type="button" onClick={() => deleteID(id)}>
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};

export default Contact;

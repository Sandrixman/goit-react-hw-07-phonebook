import { useSelector, useDispatch } from 'react-redux';
import { getContacts, delContact } from 'redux/phonebookSlice/slice';
import { getFilter } from 'redux/loginSlice/slice';
import {
  ContactsList,
  Contact,
  ContactInfo,
  Button,
} from './ContactList.styled';

const ContactList = () => {
  const fullContactsList = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredOutContacts = fullContactsList.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <ContactsList>
        {Boolean(!filteredOutContacts.length) && (
          <Contact>No contacts found.</Contact>
        )}
        {filteredOutContacts.map(({ id, name, number }, index) => (
          <Contact key={id}>
            <ContactInfo>
              {index + 1}. {name}:
            </ContactInfo>
            <ContactInfo>{number}</ContactInfo>
            <Button onClick={() => dispatch(delContact(id))}>Delete</Button>
          </Contact>
        ))}
      </ContactsList>
    </>
  );
};

export default ContactList;

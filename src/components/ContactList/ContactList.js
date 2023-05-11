import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelectors, phonebookSlice } from 'redux/phonebook/';
import { fetchContacts, deleteContact } from 'components/services/contactsApi';
import { Loading } from 'components/Loading/Loading';
import {
  ContactsList,
  Contact,
  ContactName,
  ContactPhone,
  Button,
} from './ContactList.styled';

const ContactList = () => {
  const filteredOutContacts = useSelector(
    phonebookSelectors.takeFilteredOutContacts
  );
  const isLoading = useSelector(phonebookSelectors.isLoadingValue);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(phonebookSlice.toggleLoading(true));

    fetchContacts(dispatch, controller);

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <ContactsList>
          {Boolean(!filteredOutContacts.length) && (
            <Contact>No contacts found.</Contact>
          )}
          {filteredOutContacts.map(({ id, name, phone }, index) => (
            <Contact key={id}>
              <ContactName>
                {index + 1}. {name}:
              </ContactName>
              <ContactPhone>{phone}</ContactPhone>
              <Button onClick={() => deleteContact(dispatch, id)}>
                Delete
              </Button>
            </Contact>
          ))}
        </ContactsList>
      )}
    </>
  );
};

export default ContactList;

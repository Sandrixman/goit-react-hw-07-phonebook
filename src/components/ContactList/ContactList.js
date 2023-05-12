import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operation';
import { selectFilteredOutContacts, selectIsLoading } from 'redux/selectors';
import { Loading } from 'components/Loading/Loading';
import {
  ContactsList,
  Contact,
  ContactName,
  ContactPhone,
  Button,
} from './ContactList.styled';

const ContactList = () => {
  const filteredOutContacts = useSelector(selectFilteredOutContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller));

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
              <Button onClick={() => dispatch(deleteContact(id))}>
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

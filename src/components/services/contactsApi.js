import axios from 'axios';
import { phonebookSlice } from 'redux/phonebook';

axios.defaults.baseURL =
  'https://645771ce0c15cb148208bd86.mockapi.io/contacts/';

export async function fetchContacts(dispatch, controller) {
  try {
    const { data } = await axios.get('contacts', {
      signal: controller.signal,
    });
    dispatch(phonebookSlice.addContact(data));
    dispatch(phonebookSlice.toggleLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export async function postContact(dispatch, contact) {
  const { data } = await axios.post('contacts', contact, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  dispatch(phonebookSlice.addContact([data]));
}

export async function deleteContact(dispatch, id) {
  await axios.delete(`contacts/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(phonebookSlice.delContact(id));
}

import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    findContact(state, action) {
      state.filter = action.payload.toLowerCase();
    },
    delContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistPhonebookConfig = {
  key: 'phonebook',
  storage,
};

export const persistPhonebookReducer = persistReducer(
  persistPhonebookConfig,
  phonebookSlice.reducer
);

export const { addContact, findContact, delContact } = phonebookSlice.actions;

//selector
export const getContacts = state => state.phonebook.contacts;

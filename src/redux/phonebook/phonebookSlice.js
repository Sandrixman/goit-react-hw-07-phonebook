import { createSlice } from '@reduxjs/toolkit';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.items = [...state.contacts.items, ...action.payload];
    },
    findContact(state, action) {
      state.filter = action.payload;
    },
    delContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    toggleLoading(state, action) {
      state.contacts.isLoading = action.payload;
    },
  },
});

export const { addContact, findContact, delContact, toggleLoading } =
  phonebookSlice.actions;

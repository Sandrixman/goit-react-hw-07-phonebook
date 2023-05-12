import { configureStore } from '@reduxjs/toolkit';
import { phonebookSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookSlice.reducer,
  },
});

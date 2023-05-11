import { configureStore } from '@reduxjs/toolkit';
import { phonebookSlice } from './phonebook/phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookSlice.reducer,
  },
});

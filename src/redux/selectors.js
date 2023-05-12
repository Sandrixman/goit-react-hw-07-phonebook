import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phonebook.contacts.items;

export const selectIsLoading = state => state.phonebook.contacts.isLoading;

export const selectError = state => state.phonebook.contacts.error;

export const selectFilterValue = state => state.phonebook.filter;

export const selectFilteredOutContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);

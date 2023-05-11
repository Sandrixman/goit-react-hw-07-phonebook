export const takeContacts = state => state.phonebook.contacts.items;
export const takeFilterValue = state => state.phonebook.filter;
export const isLoadingValue = state => state.phonebook.contacts.isLoading;
export const takeFilteredOutContacts = state => {
  return state.phonebook.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())
  );
};

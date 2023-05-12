import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://645771ce0c15cb148208bd86.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async (controller, thunkAPI) => {
    try {
      const { data } = await axios.get('contacts', {
        signal: controller.signal,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('contacts', contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

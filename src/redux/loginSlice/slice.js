import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    login: '',
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

const persistLoginConfig = {
  key: 'login',
  storage,
};

export const persistLoginReducer = persistReducer(
  persistLoginConfig,
  loginSlice.reducer
);

export const { logIn, logOut } = loginSlice.actions;

//selector
export const getFilter = state => state.phonebook.filter;

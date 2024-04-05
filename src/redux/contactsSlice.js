import { createSlice, createSelector } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push({ id: Date.now(), ...action.payload });
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = createSelector(
  (state) => state.contacts,
  (contacts) => contacts
);

export default contactsSlice.reducer;

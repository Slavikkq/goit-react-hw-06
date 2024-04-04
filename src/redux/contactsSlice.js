import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    searchResults: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },

    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

export const { addContact, deleteContact, setSearchResults } =
  contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;
export const selectSearchResults = (state) => state.contacts.searchResults;

export default contactsSlice.reducer;

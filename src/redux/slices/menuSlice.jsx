import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemMenus: [
    { name: "Home", link: "" },
    { name: "About me", link: "me" },
    { name: "Blog", link: "blog" },
    { name: "Contacts", link: "contacts" },
  ],
  value: 0,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCategoryId } = menuSlice.actions;

export default menuSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const limitContent = axios
      .get(`https://649025521e6aa71680cab2ec.mockapi.io/content`)
      .then((res) => res.data);
    return limitContent;
  }
);

const initialState = {
  loading: "",
  itemContents: [],
  error: "",
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.status = "success";
      state.itemContents = action.payload;
      state.error = "";
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.status = "error";
      state.itemContents = [];
      state.error = action.error.message;
    });
  },
});

export default contentSlice.reducer;

import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async (params) => {
    const { currentPage } = params;
    const limitContent = await axios.get(
      `https://649025521e6aa71680cab2ec.mockapi.io/content?page=${currentPage}&limit=6`
    );

    const allContent = await axios
      .get(`https://649025521e6aa71680cab2ec.mockapi.io/content`)
      .then((response) => response.data.length);

    return Promise.all([limitContent, allContent]).then(function (values) {
      return { data: values[0].data, pagination: values[1] };
    });
  }
);

const initialState = {
  status: "",
  items: [],
  pagination: 0,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.status = "LOADING";
      state.items = [];
      state.pagination = 0;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.pagination = action.payload.pagination;
      state.status = "SUCCESS";
    });
    builder.addCase(fetchContent.rejected, (state) => {
      state.status = "ERROR";
      state.items = [];
      state.pagination = 0;
    });
  },
});

export default contentSlice.reducer;

import React from "react";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://649025521e6aa71680cab2ec.mockapi.io",
  }),
  endpoints: (build) => ({
    getGoods: build.query({
      query: (currentPage = "") =>
        `content?${currentPage && `page=${currentPage}&limit=6`}`,
    }),
    getAllGoods: build.query({
      query: () => `content`,
    }),
  }),
});

export const { useGetGoodsQuery, useGetAllGoodsQuery } = goodsApi;

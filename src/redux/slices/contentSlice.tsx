import React from "react";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface goods {
  name: string;
  siteUrl: string;
  id: number;
  text: string;
}

interface allGoods {
  name: string;
  siteUrl: string;
  id: number;
  text: string;
}

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://649025521e6aa71680cab2ec.mockapi.io",
  }),
  endpoints: (build) => ({
    getGoods: build.query<goods[], number>({
      query: (currentPage = 1) =>
        `content?${
          String(currentPage) && `page=${String(currentPage)}&limit=6`
        }`,
    }),
    getAllGoods: build.query<allGoods[], number>({
      query: () => `content`,
    }),
  }),
});

export const { useGetGoodsQuery, useGetAllGoodsQuery } = goodsApi;

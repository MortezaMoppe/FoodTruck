import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";
const TENANT_NAME = "Morteza";

export const foodtruckApi = createApi({
  reducerPath: "foodtruckApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getApiKey: builder.query<{ apiKey: string }, void>({
      query: () => ({ url: "/keys", method: "POST" }),
    }),
    getMenu: builder.query<any, string>({
      query: (apiKey) => ({
        url: "/menu",
        method: "GET",
        headers: { "x-zocom": apiKey },
      }),
    }),
  }),
});

export const { useGetApiKeyQuery, useGetMenuQuery } = foodtruckApi;


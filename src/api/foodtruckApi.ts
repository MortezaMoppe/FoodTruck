import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";
const TENANT_NAME = "Morteza";
const API_KEY = "yum-7BTxHCyHhzIME5TI"; 

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("x-zocom", API_KEY); 
    headers.set("Content-Type", "application/json"); 
    return headers;
  },
});

export const foodtruckApi = createApi({
  reducerPath: "foodtruckApi",
  baseQuery,
  endpoints: (builder) => ({
    getMenu: builder.query<any, void>({
      query: () => "/menu",
    }),
    placeOrder: builder.mutation<
    {order: { id: string; eta: string, timestamp: string }}, { items: number[] }>({
      query: ({ items }) => ({
        url: `/${TENANT_NAME}/orders`, 
        method: "POST",
        body: { items },
      }),
    }),
    getOrder: builder.query<{ id: string; eta: number }, { id: string }>({
      query: ({ id }) => ({
        url: `/${TENANT_NAME}/orders/${id}`,
        method: "GET",
      }),
    }),
    getReceipt: builder.query<{ total: number; items: any[] }, { id: string }>({
      query: ({ id }) => ({
        url: `/receipts/${id}`, 
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMenuQuery, usePlaceOrderMutation, useGetOrderQuery, useGetReceiptQuery } = foodtruckApi;

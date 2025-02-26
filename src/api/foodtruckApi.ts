import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";
const TENANT_NAME = "Morteza";
const API_KEY = "yum-7BTxHCyHhzIME5TI";  // API-nyckeln sparas här

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
    placeOrder: builder.mutation<{ orderId: string; eta: number }, { items: number[] }>({
      query: ({ items }) => ({
        url: `/${TENANT_NAME}/orders`, 
        method: "POST",
        body: { items },
      }),
    }),
    getOrder: builder.query<{ orderId: string; eta: number }, { orderId: string }>({
      query: ({ orderId }) => ({
        url: `/${TENANT_NAME}/orders/${orderId}`,
        method: "GET",
      }),
    }),
    getReceipt: builder.query<{ total: number; items: any[] }, { orderId: string }>({
      query: ({ orderId }) => ({
        url: `/receipts/${orderId}`, 
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMenuQuery, usePlaceOrderMutation, useGetOrderQuery, useGetReceiptQuery } = foodtruckApi;

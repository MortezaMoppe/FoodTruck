import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";
const TENANT_NAME = "Morteza";
const API_KEY = "yum-7BTxHCyHhzIME5TI";  // API-nyckeln sparas här

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("x-zocom", API_KEY); 
   
    return headers;
  },
});

export const foodtruckApi = createApi({
  reducerPath: "foodtruckApi",
  baseQuery,
  endpoints: (builder) => ({
    getMenu: builder.query<any, void>({ 
      query: () => {
        
        return { url: "/menu", method: "GET" };
      },
    }),
    placeOrder: builder.mutation<{ orderId: string; eta: number }, { items: any[] }>({
      query: ({ items }) => { 
        
        return {
          url: "/order",
          method: "POST",
          body: JSON.stringify({
            tenant: TENANT_NAME,
            items,
          }),
        };
      },
    }),
  }),
});

export const { useGetMenuQuery, usePlaceOrderMutation } = foodtruckApi;

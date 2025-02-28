import { configureStore } from "@reduxjs/toolkit";
import { menuReducer, cartReducer, orderReducer } from "../reducers";
import { foodtruckApi } from "../api";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    order: orderReducer,
    [foodtruckApi.reducerPath]: foodtruckApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodtruckApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
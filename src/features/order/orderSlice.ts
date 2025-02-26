import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  orderData:{
  orderId: string | null;
  eta: number; 
} | null;
}

const initialState: OrderState = {
  orderData: null,
 
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<{ orderId: string; eta: number }>) => {
      state.orderData = { 
        orderId: action.payload.orderId,
        eta: action.payload.eta
      };
    },
    clearOrder: (state) => {
      state.orderData = null;
      
    },
  },
});

export const { setOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;

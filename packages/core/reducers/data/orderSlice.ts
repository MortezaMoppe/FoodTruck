import { createSlice, PayloadAction,} from "@reduxjs/toolkit";

interface OrderState {
  orderData:{
  id: string;
  eta: string; 
  timestamp: string;
} | null;
}

const initialState: OrderState = {
  orderData: null,
 
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<{ id: string; eta: string; timestamp: string}>) =>
      
      {
      state.orderData = { 
        id: action.payload.id,
        eta: action.payload.eta,
        timestamp: action.payload.timestamp,
      };
    },

    clearOrder: (state) => {
      state.orderData = null;
      
    },
  },
});

export const { setOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;

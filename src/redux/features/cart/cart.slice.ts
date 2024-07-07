interface CartItem {
  id: string; // Make id required
  photo: string;
  name: string;
  rating?: number;
  price: number;
  quantity: string;
}

interface CartState {
  cart: CartItem[];
}

interface UpdateObjectPayload {
  id: string;
  newObj: CartItem;
}

interface DeleteObjectPayload {
  id: string;
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity = String(
          Number(existingItem.quantity) + Number(newItem.quantity)
        );
      } else {
        state.cart.push(newItem);
      }
    },
    updateCart: (state, action: PayloadAction<UpdateObjectPayload>) => {
      const { id, newObj } = action.payload;
      const index = state.cart.findIndex((obj) => obj.id === id);
      if (index !== -1) {
        state.cart[index] = {
          ...state.cart[index],
          ...newObj,
        };
      }
    },
    deleteCart: (state, action: PayloadAction<DeleteObjectPayload>) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((obj) => obj.id !== id);
    },
  },
});

export const { addCart, updateCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;

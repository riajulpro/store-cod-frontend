interface wishlistItem {
  id?: string;
  photo: string;
  name: string;
  rating?: number;
  price: number;
  quantity: string;
}

interface wishlistState {
  wishlist: wishlistItem[];
}

interface UpdateObjectPayload {
  id?: string;
  newObj: wishlistItem;
}

interface DeleteObjectPayload {
  id?: string;
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: wishlistState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action: PayloadAction<wishlistItem>) => {
      const newItem = action.payload;
      const existingItem = state.wishlist.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity = String(
          Number(existingItem.quantity) + Number(newItem.quantity)
        );
      } else {
        state.wishlist.push(newItem);
      }
    },
    updateWishlist: (state, action: PayloadAction<UpdateObjectPayload>) => {
      const { id, newObj } = action.payload;
      const index = state.wishlist.findIndex((obj) => obj.id === id);
      if (index !== -1) {
        state.wishlist[index] = {
          ...state.wishlist[index],
          ...newObj,
        };
      }
    },
    deleteWishlist: (state, action: PayloadAction<DeleteObjectPayload>) => {
      const id = action.payload.id;
      state.wishlist = state.wishlist.filter((obj) => obj.id !== id);
    },
  },
});

export const { addWishlist, updateWishlist, deleteWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;

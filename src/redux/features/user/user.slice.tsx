import { TCustomer } from "@/types/customer";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TAuthState = {
  user: TCustomer | null;
  token: string | null;
};
// Define initial state
const initialState: TAuthState = {
  user: null,
  token: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ user: TCustomer; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    // Add more reducers as needed
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

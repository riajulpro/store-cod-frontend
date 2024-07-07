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
    setUser(
      state,
      action: PayloadAction<{ user: TCustomer | null; token: string | null }>
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state, action) {
      return { user: null, token: null };
    },

    // Add more reducers as needed
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "../api/appSlice";
import authReducer from "../features/user/user.slice";

const persistConfig = {
  key: "auth",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)
export default store;

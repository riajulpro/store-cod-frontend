"use client";
import store, { persistor } from "@/redux/store/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  ////----important(TO PREVENT HYDRATION ERROR)
  const [isRendering, setIsRendering] = useState<boolean>(false);
  useEffect(() => {
    setIsRendering(true);
  }, []);
  if (!isRendering) {
    return "";
  }
  return (
    <Provider store={store}>
      <Toaster position="top-center" richColors={true} />
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;

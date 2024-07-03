"use client";
import store from "@/redux/store/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
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
      {children}
    </Provider>
  );
};

export default ReduxProvider;

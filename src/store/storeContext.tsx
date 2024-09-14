"use client";

import React, { createContext, useContext } from "react";
import scheduleStore from "./appointmentStore";

interface Store {
  scheduleStore: typeof scheduleStore;
}

const store: Store = {
  scheduleStore,
};

const StoreContext = createContext(store);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  return useContext(StoreContext);
};

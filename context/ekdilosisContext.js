"use client";

import { createContext, useContext, useState } from "react";

const EkdilContext = createContext();

export default function EkdilosisProvider({ children }) {
  const [events, setEvents] = useState("main");

  return (
    <EkdilContext.Provider value={{ events, setEvents }}>
      {children}
    </EkdilContext.Provider>
  );
}

export const useEkdilContext = () => {
  const context = useContext(EkdilContext);
  if (!context) {
    throw new Error("useEkdilContext must be used within a EkdilosisProvider");
  }
  return context;
};

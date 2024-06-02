import { createContext, useState } from "react";

// Create the context
export const idContext = createContext();

// Create the provider component
export const IdProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <idContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </idContext.Provider>
  );
};

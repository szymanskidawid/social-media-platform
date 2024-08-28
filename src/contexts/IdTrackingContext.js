import { createContext, useState } from "react";

export const IdTrackingContext = createContext();

export const IdTrackingProvider = ({ children }) => {
  const [selectedProfileId, setSelectedProfileId] = useState("");
  const [activeChatId, setActiveChatId] = useState("");

  return (
    <IdTrackingContext.Provider
      value={{
        selectedProfileId,
        activeChatId,
        setSelectedProfileId,
        setActiveChatId,
      }}
    >
      {children}
    </IdTrackingContext.Provider>
  );
};

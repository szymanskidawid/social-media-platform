import { createContext, useState } from "react";

export const ContainerViewContext = createContext();

export const ContainerViewProvider = ({ children }) => {
  const [containerView, setContainerView] = useState("");

  return (
    <ContainerViewContext.Provider value={{ containerView, setContainerView }}>
      {children}
    </ContainerViewContext.Provider>
  );
};

import { createContext } from "react";

export const LoginStateContext = createContext();

export const LoginStateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginStateContext.Provider>
  );
};

const { createContext, useState, useEffect } = require("react");

export const LightModeContext = createContext();

export const LightModeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    if (!isLightMode) {
      document.body.classList.add("dark-mode-4");
    } else {
      document.body.classList.remove("dark-mode-4");
    }
  }, [isLightMode]);

  return (
    <LightModeContext.Provider value={{ isLightMode, setIsLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};

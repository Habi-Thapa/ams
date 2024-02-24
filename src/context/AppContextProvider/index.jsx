/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext({}); // Define the context outside of the provider

const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{ user: { isLoggedIn, setIsLoggedIn } }}>
      {children}
    </AppContext.Provider>
  );
};

// Define a custom hook to use the context
export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;

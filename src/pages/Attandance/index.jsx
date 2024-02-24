import React from "react";
import { useAppContext } from "../../context/AppContextProvider";

const Attandance = () => {
  const {
    user: { isLoggedIn, setIsLoggedIn },
  } = useAppContext();
  return (
    <div>
      Attandance {isLoggedIn ? "Yes" : "NO"}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle</button>
    </div>
  );
};

export default Attandance;

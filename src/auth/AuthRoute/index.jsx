import React from "react";
import { useAppContext } from "../../context/AppContextProvider";
import { Login } from "../../pages";
import App from "../../App";

const AuthRoute = () => {
  const {
    user: { isLoggedIn },
  } = useAppContext();
  return isLoggedIn ? <App /> : <Login />;
};

export default AuthRoute;

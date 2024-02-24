import { useAppContext } from "../../context/AppContextProvider";
import App from "../../App";
import { Login } from "../../pages";
const AuthRoute = () => {
  const {
    user: { isLoggedIn },
  } = useAppContext();
  return isLoggedIn ? <App /> : <Login />;
};

export default AuthRoute;

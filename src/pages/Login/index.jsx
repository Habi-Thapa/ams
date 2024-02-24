import { Button } from "@mui/material";
import axiosInstance from "../../api";
import ENDPOINTS from "../../api/ENDPOINTS";
import { useAppContext } from "../../context/AppContextProvider";

const Login = () => {
  const postData = {
    key1: "value1",
    key2: "value2",
  };

  const {
    user: { isLoggedIn, setIsLoggedIn },
  } = useAppContext();

  axiosInstance
    .post(ENDPOINTS.LOGGED_IN, postData)
    .then((response) => {
      // Handle successful response
      console.log("Response:", response.data);
    })
    .catch((error) => {
      // Handle error
      console.error("Error:", error);
    });
  return <Button onClick={() => setIsLoggedIn(true)}>Login</Button>;
};

export default Login;

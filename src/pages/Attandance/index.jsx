import React from "react";
import { useAppContext } from "../../context/AppContextProvider";
import { Box, Button, Stack, Typography } from "@mui/material";

const Attandance = () => {
  const {
    user: { isLoggedIn, setIsLoggedIn },
  } = useAppContext();
  return (
    <Box>
      <Typography>
        Attandance: {isLoggedIn ? "Logged In" : "Logged Out"}
      </Typography>
      <Button variant="outlined" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle
      </Button>
    </Box>
  );
};

export default Attandance;

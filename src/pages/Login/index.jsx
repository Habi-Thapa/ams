import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAppContext } from "../../context/AppContextProvider";
import { useState } from "react";
import axiosInstance from "../../api";
import ENDPOINTS from "../../api/ENDPOINTS";

const initialFormValues = {
  email: "",
  password: "",
};

export default function SignIn() {
  const {
    user: { isLoggedIn, setIsLoggedIn },
  } = useAppContext();

  const [formData, setFormData] = useState(initialFormValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    axiosInstance
      .post(ENDPOINTS.LOGGED_IN, formData)
      .then((response) => {
        // Handle successful response
        console.log("Response:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
    // Check email and password
    if (formData.email === "admin" && formData.password === "admin") {
      setIsLoggedIn(true);
      localStorage.setItem("santosh_login", true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update formData with new value
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="text"
            autoFocus
            value={formData.email} // Set value from formData
            onChange={handleChange} // Handle change event
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password} // Set value from formData
            onChange={handleChange} // Handle change event
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

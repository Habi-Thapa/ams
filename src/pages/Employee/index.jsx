import { Box, Container, CssBaseline, Typography } from "@mui/material";
import ViewEmployee from "./ViewEmployee";
import AddEmployee from "./AddEmployee";

const Employee = () => {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
        }}
      >
        <AddEmployee />
        <Typography variant="h4" component="h2">
          Employees List
        </Typography>
        <ViewEmployee />
      </Box>
    </Container>
  );
};

export default Employee;

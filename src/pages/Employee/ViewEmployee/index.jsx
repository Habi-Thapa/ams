import { Box } from "@mui/material";
import axiosInstance from "../../../api";
import ENDPOINTS from "../../../api/ENDPOINTS";
import { useEffect, useState } from "react";
import fetchEmployees from "../services/fetchEmployee";

const ViewEmployee = () => {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    fetchEmployees()
      .then((response) => {
        setEmployeesData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
      }}
    >
      Hello
    </Box>
  );
};

export default ViewEmployee;

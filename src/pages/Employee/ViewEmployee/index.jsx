import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import fetchEmployees from "../services/fetchEmployee";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "first_name", headerName: "First Name", width: 150 },
  { field: "middle_name", headerName: "Middle Name", width: 150 },
  { field: "last_name", headerName: "Last Name", width: 150 },
  { field: "gender", headerName: "Gender", width: 150 },
  { field: "age", headerName: "Age", width: 150 },
  { field: "address", headerName: "Address", width: 150 },
  { field: "contact_details", headerName: "Contact Detail", width: 150 },
];

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
  const minHeight = employeesData.length > 0 ? "auto" : 500; // Set a minimum height when there is no data

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        height: minHeight,
      }}
    >
      <DataGrid rows={employeesData} columns={columns} />
    </Box>
  );
};

export default ViewEmployee;

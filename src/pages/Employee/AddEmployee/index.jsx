import { useState } from "react";
import { Button } from "@mui/material";
import EmployeeForm from "../components/EmployeeForm";

const initialData = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "female",
  age: "",
  address: "",
  contactDetails: "",
};

const AddEmployee = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (formData) => {
    console.log("Formdata", formData);
    // Handle form submission
    // For example, you can perform validation and submit data to the server
    setShowForm(false); // Hide the form after submission
  };

  return (
    <div>
      <Button fullWidth variant="outlined" onClick={toggleForm} sx={{ mb: 3 }}>
        {showForm ? "Cancel Adding" : "Add Employee"}
      </Button>
      {showForm && (
        <EmployeeForm initialData={initialData} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default AddEmployee;

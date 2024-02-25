import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const EmployeeForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    // Handle form submission
    // For example, you can perform validation and submit data to the server
    onSubmit(formData); // Hide the form after submission
  };

  return (
    <div>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="firstName"
          type="text"
          autoFocus
          value={formData?.firstName} // Set value from formData
          onChange={handleChange} // Handle change event
        />
        <TextField
          margin="normal"
          fullWidth
          id="middleName"
          label="Middle Name"
          name="middleName"
          autoComplete="middleName"
          type="text"
          autoFocus
          value={formData?.middleName} // Set value from formData
          onChange={handleChange} // Handle change event
        />
        <TextField
          margin="normal"
          fullWidth
          required
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lastName"
          type="text"
          autoFocus
          value={formData?.lastName} // Set value from formData
          onChange={handleChange} // Handle change event
        />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            value={formData?.gender}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <TextField
          margin="normal"
          fullWidth
          required
          id="age"
          label="Age"
          name="age"
          autoComplete="age"
          type="number"
          autoFocus
          value={formData?.age} // Set value from formData
          onChange={handleChange} // Handle change event
        />
        <TextField
          margin="normal"
          fullWidth
          id="address"
          label="Address"
          name="address"
          autoComplete="address"
          type="text"
          autoFocus
          value={formData?.address} // Set value from formData
          onChange={handleChange} // Handle change event
        />
        <TextField
          margin="normal"
          fullWidth
          id="contactDetails"
          label="Contact Details"
          name="contactDetails"
          autoComplete="contactDetails"
          type="text"
          autoFocus
          value={formData?.contactDetails} // Set value from formData
          onChange={handleChange} // Handle change event
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{ mt: 3, mb: 8 }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default EmployeeForm;
